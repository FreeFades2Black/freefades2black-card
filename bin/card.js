#!/usr/bin/env node

'use strict';

const args = process.argv.slice(2);

// ANSI Color Codes
const c = {
  reset: '\x1b[0m',
  bold: '\x1b[1m',
  dim: '\x1b[2m',
  underline: '\x1b[4m',
  
  // Neon Cyberpunk Palette
  neonGreen: '\x1b[38;2;0;255;102m',
  neonCyan: '\x1b[38;2;0;240;255m',
  neonYellow: '\x1b[38;2;255;230;0m',
  neonMagenta: '\x1b[38;2;255;0;128m',
  electricBlue: '\x1b[38;2;53;149;255m',
  orange: '\x1b[38;2;255;102;0m',
  gray: '\x1b[38;2;120;120;120m',
  white: '\x1b[38;2;240;240;240m'
};

const profileData = {
  handle: "FreeFades2Black",
  title: "Solutions Architect & Cloud / Data Engineer",
  military: "18Z / 18F, US Army Special Forces (Ret.)",
  partner: "7 Eagle Group",
  organization: "For-Your-Service",
  github: "https://github.com/FreeFades2Black",
  org_url: "https://github.com/For-Your-Service",
  projects: [
    { name: "For-Your-Service", url: "https://github.com/For-Your-Service" },
    { name: "Gunslinger's Desktop Ledger", url: "https://github.com/FreeFades2Black/gunslingers-desktop-ledger" },
    { name: "Windows Cert Manager ('The J')", url: "https://github.com/FreeFades2Black/windows_cert_manager" },
    { name: "Databricks FYS Serverless App", url: "https://fys-matching-app-7474643734871839.aws.databricksapps.com" }
  ],
  stack: [
    "Databricks Lakehouse", "AWS / GCP / Azure", "Apache PySpark", 
    "Delta Lake", "Terraform IaC", "Docker / Kubernetes", 
    "Python / FastAPI", "PowerShell Automation"
  ]
};

if (args.includes('--json')) {
  console.log(JSON.stringify(profileData, null, 2));
  process.exit(0);
}

if (args.includes('--help') || args.includes('-h')) {
  console.log(`
${c.neonCyan}${c.bold}Usage:${c.reset}
  npx @freefades2black/card [options]

${c.neonGreen}${c.bold}Options:${c.reset}
  --json     Output profile details as JSON
  --help     Show this help message
`);
  process.exit(0);
}

function getVisibleLength(str) {
  const clean = str.replace(/\x1b\[[0-9;]*m/g, '');
  return clean.length;
}

const BOX_WIDTH = 80;

function createRow(content) {
  const visibleLen = getVisibleLength(content);
  const pad = Math.max(0, BOX_WIDTH - visibleLen);
  return `${c.neonGreen}│${c.reset}  ${content}${' '.repeat(pad)}  ${c.neonGreen}│${c.reset}`;
}

const lines = [
  `${c.neonCyan}${c.bold}FREEFADES2BLACK${c.reset} ${c.dim}//${c.reset} ${c.neonYellow}${c.bold}CYBERPUNK COMMAND MATRIX v1.0${c.reset}`,
  `${c.gray}Status: 100% OPERATIONAL | Security Matrix: ACTIVE${c.reset}`,
  `---DIVIDER---`,
  ``,
  `${c.neonMagenta}${c.bold}OPERATOR PROFILE${c.reset}`,
  `${c.white}${c.bold}Role:${c.reset}         Solutions Architect & Cloud/Data Engineer`,
  `${c.white}${c.bold}Service:${c.reset}      18Z / 18F, US Army Special Forces (Ret.)`,
  `${c.white}${c.bold}Affiliation:${c.reset}  Partner: 7 Eagle Group`,
  `${c.white}${c.bold}Organization:${c.reset} For-Your-Service`,
  ``,
  `${c.neonCyan}${c.bold}CORE SUBSYSTEMS & STACK${c.reset}`,
  `${c.orange}> Data Platform:${c.reset} Databricks Lakehouse, Apache PySpark, Delta Lake`,
  `${c.electricBlue}> Cloud Infra:${c.reset}   AWS, GCP, Azure, Terraform IaC, Docker, K8s`,
  `${c.neonGreen}> Core Engine:${c.reset}   Python, FastAPI Microservices, PowerShell`,
  ``,
  `${c.neonYellow}${c.bold}COMMAND & CONTROL NETWORK${c.reset}`,
  `${c.white}GitHub:${c.reset}         ${c.underline}https://github.com/FreeFades2Black${c.reset}`,
  `${c.white}Organization:${c.reset}   ${c.underline}https://github.com/For-Your-Service${c.reset}`,
  `${c.white}Databricks App:${c.reset} ${c.dim}https://fys-matching-app-7474643734871839.aws.databricksapps.com${c.reset}`,
  ``,
  `${c.gray}Run:${c.reset} ${c.neonCyan}npx @freefades2black/card${c.reset}  ${c.gray}| JSON:${c.reset} ${c.neonCyan}npx @freefades2black/card --json${c.reset}`
];

const topBorder = `${c.neonGreen}┌${'─'.repeat(BOX_WIDTH + 4)}┐${c.reset}`;
const divider = `${c.neonGreen}├${'─'.repeat(BOX_WIDTH + 4)}┤${c.reset}`;
const bottomBorder = `${c.neonGreen}└${'─'.repeat(BOX_WIDTH + 4)}┘${c.reset}`;

console.log('');
console.log(topBorder);
for (const line of lines) {
  if (line === '---DIVIDER---') {
    console.log(divider);
  } else {
    console.log(createRow(line));
  }
}
console.log(bottomBorder);
console.log('');
