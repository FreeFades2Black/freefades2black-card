# `@freefades2black/card` — Interactive Cyberpunk Terminal Business Card

Interactive Cyberpunk Terminal Business Card for **William Free Hall (`FreeFades2Black`)** — Solutions Architect, Cloud/Data Engineer & U.S. Army Special Forces Veteran (`18Z / 18F`).

🌐 **Live Interactive Web Card (Browser / Mobile / LinkedIn):**  
👉 **[https://freefades2black.github.io/freefades2black-card/](https://freefades2black.github.io/freefades2black-card/)**

---

## ⚡ Quick Share & Run (Zero Auth / Any Machine)

Because GitHub Packages (`npm.pkg.github.com`) requires a personal access token even for public packages, share any of the **zero-config commands below** so anyone can run your card immediately without setting up an `.npmrc`:

### 1. Universal `npx` (macOS, Linux, Windows Terminal, PowerShell)
```bash
npx github:FreeFades2Black/freefades2black-card
```

### 2. Machine-Readable JSON Mode
```bash
npx github:FreeFades2Black/freefades2black-card --json
```

### 3. Instant Zero-Node Terminal Stream (`curl` / PowerShell `irm`)
Works even on machines without Node.js installed:
```bash
# Linux / macOS / Omarchy Arch Linux
curl -sL https://freefades2black.github.io/freefades2black-card/card.ans

# Windows PowerShell
irm https://freefades2black.github.io/freefades2black-card/card.ans
```

---

## 📦 GitHub Packages Installation (Authenticated)

If installing via GitHub Packages (`@freefades2black/card`):
```bash
npm install @freefades2black/card --registry=https://npm.pkg.github.com
```

---

## 🛠️ Local Development & Verification

```bash
git clone https://github.com/FreeFades2Black/freefades2black-card.git
cd freefades2black-card

# Run card locally
node bin/card.js

# Run JSON output
node bin/card.js --json

# Run automated pytest verification suite
python -m pytest tests/test_card.py -v
```
