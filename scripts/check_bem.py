import re
import os
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PATTERN = re.compile(r'^[a-z0-9]+(?:-[a-z0-9]+)*(?:__(?:[a-z0-9]+(?:-[a-z0-9]+)*))?(?:--(?:[a-z0-9]+(?:-[a-z0-9]+)*))?$')
CLASS_ATTR_RE = re.compile(r'class\s*=\s*"([^"]+)"')
CSS_CLASS_RE = re.compile(r'\.([A-Za-z0-9_\-]+)')

issues = {}

def check_file(path):
    with open(path, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    for i, line in enumerate(lines, start=1):
        # HTML class attributes
        for m in CLASS_ATTR_RE.finditer(line):
            classes = m.group(1).split()
            for cls in classes:
                if not PATTERN.match(cls):
                    issues.setdefault(cls, []).append(f"{path}:{i}")
        # CSS selectors (approximate)
        for m in CSS_CLASS_RE.finditer(line):
            cls = m.group(1)
            # skip common patterns (e.g., .col-12) but still check
            if not PATTERN.match(cls):
                issues.setdefault(cls, []).append(f"{path}:{i}")

for dirpath, dirnames, filenames in os.walk(ROOT):
    # skip node_modules, .git
    if 'node_modules' in dirpath or '.git' in dirpath:
        continue
    for fname in filenames:
        if fname.endswith(('.html', '.css', '.md')):
            check_file(os.path.join(dirpath, fname))

if not issues:
    print('No non-conforming classes found.')
else:
    total = sum(len(v) for v in issues.values())
    print(f'Found {len(issues)} non-conforming class names ({total} occurrences):\n')
    for cls, occ in sorted(issues.items()):
        print(f"- {cls}:")
        for o in occ:
            print(f"    {o}")
    print('\nSuggested next steps: review these names and decide new BEM-compliant names.')
