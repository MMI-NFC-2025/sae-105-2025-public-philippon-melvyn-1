$root = Split-Path -Parent $MyInvocation.MyCommand.Path | Split-Path -Parent
$pattern = '^[a-z0-9]+(?:-[a-z0-9]+)*(?:__(?:[a-z0-9]+(?:-[a-z0-9]+)*))?(?:--(?:[a-z0-9]+(?:-[a-z0-9]+)*))?$'
$issues = @{}
Get-ChildItem -Path $root -Recurse -Include *.html,*.css,*.md | ForEach-Object {
    $path = $_.FullName
    $lines = Get-Content -Path $path -ErrorAction SilentlyContinue
    for ($i=0; $i -lt $lines.Length; $i++) {
        $line = $lines[$i]
        # find class="..."
        if ($line -match 'class\s*=\s*"([^"]+)"') {
            $classes = $Matches[1] -split '\s+'
            foreach ($c in $classes) {
                if (-not [regex]::IsMatch($c, $pattern)) {
                    if (-not $issues.ContainsKey($c)) { $issues[$c] = @() }
                    $issues[$c] += "${path}:$($i+1)"
                }
            }
        }
        # find .class in css/selectors roughly
        foreach ($m in ([regex]::Matches($line, '\.([A-Za-z0-9_\-]+)'))) {
            $c = $m.Groups[1].Value
                if (-not [regex]::IsMatch($c, $pattern)) {
                if (-not $issues.ContainsKey($c)) { $issues[$c] = @() }
                $issues[$c] += "${path}:$($i+1)"
            }
        }
    }
}
if ($issues.Keys.Count -eq 0) {
    Write-Output "No non-conforming classes found."
} else {
    $total = ($issues.Values | ForEach-Object { $_.Count } | Measure-Object -Sum).Sum
    Write-Output "Found $($issues.Keys.Count) non-conforming class names ($total occurrences):`n"
    foreach ($k in ($issues.Keys | Sort-Object)) {
        Write-Output ("- ${k}:`n")
        foreach ($o in $issues[$k]) { Write-Output ("    ${o}") }
    }
    Write-Output "`nSuggested next steps: review these names and decide new BEM-compliant names."
}
