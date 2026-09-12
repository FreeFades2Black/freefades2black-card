# ADR-0001: Zero-Dependency Architecture with Native Unicode Box Drawing

**Status:** Accepted  
**Date:** 2026-05-10  
**Lead Architect:** William Free Hall (Free) <whall4.wh@gmail.com>

## 1. Context & Operational Challenge
Distributing an interactive CLI developer profile card via `npx freefades2black` requires instantaneous execution (<100ms) and zero vulnerability footprint. Standard npm packages (e.g. `chalk`, `boxen`, `cli-boxes`) pull in 30+ transitive dependencies.

## 2. Options Considered
* **Option A: Standard NPM Packages (Chalk, Boxen)**
  - *Evaluation:* Easy formatting, but npm install delay (3-5 seconds), ~5MB node_modules footprint, risk of supply-chain attacks in transitive dependencies.
* **Option B: Pure Vanilla Node.js with Raw ANSI Escape Sequences & Unicode Box Characters**
  - *Evaluation:* Exactly 0 external dependencies; file size < 10KB; instantaneous execution (<25ms) directly from npx cache.

## 3. Decision & Trade-Off Accepted
We adopted **Option B (Zero-Dependency)**.  
**Trade-Off Accepted:** Requires manual ANSI color escape string management (`\x1b[36m`) and custom string width padding calculations for multi-byte Unicode strings.
