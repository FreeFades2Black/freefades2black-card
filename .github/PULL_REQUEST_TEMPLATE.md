## CLI Card Operational Overview
*Describe modifications to card layout, contact info, or CLI flags.*

- [ ] Contact Info / Career Metadata Update
- [ ] ANSI Rendering & Box Styling
- [ ] JSON Output Mode (`--json`)
- [ ] Cross-Platform Windows Terminal Fix

## Verification Checklist
- [ ] CLI executes cleanly without errors: `node bin/card.js`
- [ ] JSON output validates cleanly: `node bin/card.js --json`
- [ ] Automated test suite passed: `python -m pytest tests/ -v`
- [ ] Zero external dependencies in package.json
