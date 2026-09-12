# ADR-0002: Dual-Mode Interactive Terminal Output and Structured JSON (`--json`)

**Status:** Accepted  
**Date:** 2026-05-28  
**Lead Architect:** William Free Hall (Free) <whall4.wh@gmail.com>

## 1. Context & Operational Challenge
Developer cards are invoked both by humans in terminal emulators and by automated AI agents / CLI pipelines that require machine-readable data.

## 2. Options Considered
* **Option A: Terminal Text Only**
  - *Evaluation:* Visually appealing, but requires complex regex parsing for agents to extract contact emails, GitHub links, and career history.
* **Option B: Dual-Mode CLI with Flag Sniffing (`process.argv.includes('--json')`)**
  - *Evaluation:* Emits raw ANSI box card by default; emits structured JSON dictionary when invoked with `--json` or non-interactive TTY redirection.

## 3. Decision & Trade-Off Accepted
We adopted **Option B (Dual-Mode)**.  
**Trade-Off Accepted:** Card data model must be maintained as a clean JSON object before rendering ANSI string frames.
