# Operational Runbook: Windows Terminal Box-Drawing & UTF-8 Code Page 65001 Triage

**Severity:** P3 / Display Rendering Distortion  
**Target Systems:** Windows Console Host, PowerShell 5.1, Windows Terminal

## Diagnostic Workflow

### 1. Check Console Active Code Page
```powershell
chcp
```
If active code page is `437` (OEM US) or `1252` (Windows ANSI):

### 2. Force UTF-8 Encoding in Shell Session
```powershell
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
chcp 65001
```

### 3. Verify Clean Box-Drawing Rendering
```bash
node bin/card.js
```
Confirm corners (`┌`, `┐`, `└`, `┘`) and borders (`─`, `│`) render without replacement question marks (`?`).
