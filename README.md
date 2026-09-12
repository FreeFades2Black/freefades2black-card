# @freefades2black/card

> Terminal business card for **FreeFades2Black** (Solutions Architect, Cloud/Data Engineer & Special Operations Veteran).

---

## Quick Run

Run in any terminal (PowerShell, macOS, Linux, Windows Terminal) with `npx`:

```bash
npx @freefades2black/card
```

### JSON Mode
Output operator details and technical stack as raw JSON:

```bash
npx @freefades2black/card --json
```

---

## Verified Terminal Output

Raw execution output from running `node bin/card.js`:

```text
┌────────────────────────────────────────────────────────────────────────────────────┐
│  FREEFADES2BLACK // CYBERPUNK COMMAND MATRIX v1.0                                  │
│  Status: 100% OPERATIONAL | Security Matrix: ACTIVE                                │
├────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                    │
│  OPERATOR PROFILE                                                                  │
│  Role:         Solutions Architect & Cloud/Data Engineer                           │
│  Service:      18Z / 18F, US Army Special Forces (Ret.)                            │
│  Affiliation:  Partner: 7 Eagle Group                                              │
│  Organization: For-Your-Service                                                    │
│                                                                                    │
│  CORE SUBSYSTEMS & STACK                                                           │
│  > Data Platform: Databricks Lakehouse, Apache PySpark, Delta Lake                 │
│  > Cloud Infra:   AWS, GCP, Azure, Terraform IaC, Docker, K8s                      │
│  > Core Engine:   Python, FastAPI Microservices, PowerShell                        │
│                                                                                    │
│  COMMAND & CONTROL NETWORK                                                         │
│  GitHub:         https://github.com/FreeFades2Black                                │
│  Organization:   https://github.com/For-Your-Service                               │
│  Databricks App: https://fys-matching-app-7474643734871839.aws.databricksapps.com  │
│                                                                                    │
│  Run: npx @freefades2black/card  | JSON: npx @freefades2black/card --json          │
└────────────────────────────────────────────────────────────────────────────────────┘
```

---

## Engineering Considerations & Trade-offs

### 1. Zero-Dependency Runtime Footprint
CLI cards frequently import heavy third-party npm packages (such as `boxen`, `chalk`, `inquirer`), inflating package download sizes to several megabytes and increasing `npx` invocation latency. This card uses pure Node.js standard library APIs and raw ANSI terminal escape sequences, keeping the package size under 4KB with instantaneous execution.

### 2. Cross-Platform Console Character Encoding
Legacy Windows console hosts (`conhost.exe` running code page 437) may misrender UTF-8 box-drawing border glyphs (`┌`, `─`, `│`, `└`). The script detects terminal capability flags (`process.stdout.isTTY`, Windows Terminal `WT_SESSION` environment variable) and emits sanitized boundary alignments to prevent layout corruption.

### 3. Programmatic Pipeline Integration (`--json`)
When invoked with `--json`, all ANSI formatting codes and decorative borders are suppressed. The output emits strictly valid JSON directly to `stdout`, enabling seamless piping into CLI tools like `jq` without requiring text regex sanitization.

---

## Local Development & Testing

1. **Clone repository:**
   ```bash
   git clone https://github.com/FreeFades2Black/freefades2black-card.git
   cd freefades2black-card
   ```

2. **Run locally:**
   ```bash
   node bin/card.js
   ```

3. **Link locally to test CLI execution:**
   ```bash
   npm link
   freefades2black
   ```

---

## Publishing to GitHub Packages

This repository contains an automated GitHub Actions workflow (`.github/workflows/publish.yml`).

1. Push your repository to GitHub.
2. Create a new release (or trigger manually via **Actions** -> **Publish Package to GitHub Packages**).
3. The package will automatically appear under your GitHub Packages tab.
