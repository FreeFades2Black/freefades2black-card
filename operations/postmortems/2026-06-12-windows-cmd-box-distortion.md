# Incident Post-Mortem: Legacy Windows Cmd.exe Distorting Card Box Borders

**Incident Date:** 2026-06-12  
**Impact Duration:** N/A (Cosmetic Bug Fix)  
**Severity:** SEV-4  
**Root Cause:** Legacy `cmd.exe` running code page 437 rendered Unicode box characters `╭─╮` as accented letters `Ã¢â”`.

## Corrective Actions
1. Added pre-flight terminal capability detection in `bin/card.js`:
   ```javascript
   const isUtf8 = process.platform !== 'win32' || process.env.WT_SESSION || process.env.TERM_PROGRAM;
   ```
2. Fallback to ASCII `+---+` border characters if terminal does not support UTF-8.
