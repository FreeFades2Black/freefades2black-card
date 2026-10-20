#!/usr/bin/env node

'use strict';

const { execFile } = require('child_process');
const readline = require('readline');

if (process.stdout && typeof process.stdout.setDefaultEncoding === 'function') {
  process.stdout.setDefaultEncoding('utf8');
}

const args = process.argv.slice(2);

// ANSI Color Codes (High-contrast legible across dark & light terminals)
const c = {
  reset: '\x1b[0m',
  bold: '\x1b[1m',
  dim: '\x1b[2m',
  underline: '\x1b[4m',
  neonGreen: '\x1b[38;2;0;255;102m',
  neonCyan: '\x1b[38;2;0;240;255m',
  neonYellow: '\x1b[38;2;255;230;0m',
  neonMagenta: '\x1b[38;2;255;0;128m',
  electricBlue: '\x1b[38;2;53;149;255m',
  orange: '\x1b[38;2;255;102;0m',
  gray: '\x1b[38;2;140;148;158m',
  white: '\x1b[38;2;240;246;252m'
};

const profileData = {
  handle: "FreeFades2Black",
  name: "William Free Hall (Free)",
  title: "Solutions Architect & Cloud / Data Engineer",
  military: "18Z / 18F, US Army Special Forces (Ret.) | 23 Years Active Duty (US Army / USMC)",
  partner: "7 Eagle Group",
  organization: "For-Your-Service",
  email: "whall4.wh@gmail.com",
  github: "https://github.com/FreeFades2Black",
  linkedin: "https://linkedin.com/in/william-free-hall",
  org_url: "https://github.com/For-Your-Service",
  web_card: "https://freefades2black.github.io/freefades2black-card/",
  competencies: {
    cloud_orchestration: ["AWS", "Azure Government", "GCP", "Docker", "Kubernetes", "Terraform IaC", "Ansible"],
    data_engineering: ["Databricks Lakehouse (Medallion)", "Apache PySpark", "Delta Lake", "Python", "SQL"],
    systems_security: ["Linux (Arch / Omarchy / RHEL)", "Zero-Trust CI/CD Pipelines", "Automated Policy Governance"]
  },
  experience: [
    "Solutions Architect & Cloud Engineer (Oaken Sky / Enterprise Consulting): Multi-cloud automation, containerized ingestion, Medallion lakehouse pipelines, and Terraform IaC.",
    "Special Operations Leadership (U.S. Army Special Forces 18Z/18F & USMC): 23 years active duty leading high-stakes cross-functional detachments, intelligence/communications architecture, and zero-fail mission execution."
  ],
  projects: [
    { name: "For-Your-Service", url: "https://github.com/For-Your-Service" },
    { name: "Palace Engine (SAA-C03 Cognitive SRS)", url: "https://github.com/FreeFades2Black/palace-engine" },
    { name: "Enterprise Multi-Cloud GitOps Zero-Trust", url: "https://github.com/FreeFades2Black/enterprise-multicloud-gitops-zerotrust" },
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
  npx github:FreeFades2Black/freefades2black-card [options]
  npx @freefades2black/card [options]

${c.neonGreen}${c.bold}Options:${c.reset}
  --json             Output operator profile & architecture portfolio as JSON
  --section <1-4>    Print a specific resume section non-interactively
  --no-interactive   Render the card and exit immediately without interactive menu
  --help, -h         Show this help message
`);
  process.exit(0);
}

function getVisibleLength(str) {
  return str.replace(/\x1b\[[0-9;]*m/g, '').length;
}

const BOX_WIDTH = 80;

function createRow(content) {
  const visibleLen = getVisibleLength(content);
  const pad = Math.max(0, BOX_WIDTH - visibleLen);
  return `${c.neonGreen}│${c.reset}  ${content}${' '.repeat(pad)}  ${c.neonGreen}│${c.reset}`;
}

function renderCard() {
  const lines = [
    `${c.neonCyan}${c.bold}FREEFADES2BLACK${c.reset} ${c.dim}//${c.reset} ${c.neonYellow}${c.bold}CYBERPUNK COMMAND MATRIX v1.1${c.reset}`,
    `${c.gray}Status: 100% OPERATIONAL | Security Matrix: ACTIVE${c.reset}`,
    `---DIVIDER---`,
    ``,
    `${c.neonMagenta}${c.bold}OPERATOR PROFILE${c.reset}`,
    `${c.white}${c.bold}Operator:${c.reset}     William Free Hall (Free)`,
    `${c.white}${c.bold}Role:${c.reset}         Solutions Architect & Cloud/Data Engineer`,
    `${c.white}${c.bold}Service:${c.reset}      18Z / 18F, US Army Special Forces (Ret.)`,
    `${c.white}${c.bold}Affiliation:${c.reset}  Partner: 7 Eagle Group`,
    `${c.white}${c.bold}Organization:${c.reset} For-Your-Service`,
    ``,
    `${c.neonCyan}${c.bold}CORE SUBSYSTEMS & STACK${c.reset}`,
    `${c.orange}> Data Platform:${c.reset} Databricks Lakehouse, Apache PySpark, Delta Lake`,
    `${c.electricBlue}> Cloud Infra:${c.reset}   AWS, Azure Gov, GCP, Terraform IaC, Docker, K8s`,
    `${c.neonGreen}> Core Engine:${c.reset}   Python, FastAPI Microservices, Linux, PowerShell`,
    ``,
    `${c.neonYellow}${c.bold}COMMAND & CONTROL NETWORK${c.reset}`,
    `${c.white}GitHub:${c.reset}         ${c.underline}https://github.com/FreeFades2Black${c.reset}`,
    `${c.white}LinkedIn:${c.reset}       ${c.underline}https://linkedin.com/in/william-free-hall${c.reset}`,
    `${c.white}Web Portfolio:${c.reset}  ${c.underline}https://freefades2black.github.io/freefades2black-card/${c.reset}`,
    `${c.white}Email:${c.reset}          whall4.wh@gmail.com`,
    ``,
    `${c.gray}Run:${c.reset} ${c.neonCyan}npx github:FreeFades2Black/freefades2black-card${c.reset} ${c.gray}|${c.reset} ${c.neonCyan}--json${c.reset}`
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
}

function openUrl(url) {
  const platform = process.platform;
  if (platform === 'win32') {
    execFile('cmd', ['/c', 'start', '', url], () => {});
  } else if (platform === 'darwin') {
    execFile('open', [url], () => {});
  } else {
    execFile('xdg-open', [url], () => {});
  }
}

function printSection(choiceIndex) {
  console.log('');
  if (choiceIndex === 0) {
    console.log(`${c.neonCyan}${c.bold}=== [1] CORE COMPETENCIES & CLOUD ARCHITECTURE ===${c.reset}`);
    console.log(`${c.orange}• Cloud & Orchestration:${c.reset} AWS, Azure Government, GCP, Docker, Kubernetes, Terraform, Ansible`);
    console.log(`${c.electricBlue}• Data Engineering:${c.reset}      PySpark, Python, Databricks Medallion Lakehouse, Delta Lake`);
    console.log(`${c.neonGreen}• Systems & Security:${c.reset}    Linux (Arch/RHEL), CI/CD Telemetry, Automated Policy Governance`);
  } else if (choiceIndex === 1) {
    console.log(`${c.neonMagenta}${c.bold}=== [2] EXPERIENCE & LEADERSHIP HISTORY ===${c.reset}`);
    console.log(`${c.white}${c.bold}• Solutions Architect & Cloud Engineer (Oaken Sky / Enterprise Consulting):${c.reset}`);
    console.log(`  Multi-cloud automation, event-driven pipeline architecture, containerized ingestion, and IaC design.`);
    console.log(`${c.white}${c.bold}• Special Operations Leadership (U.S. Army Special Forces 18Z/18F & USMC):${c.reset}`);
    console.log(`  23 years of active duty leading high-stakes detachments, managing complex intelligence & communications`);
    console.log(`  architectures, and translating mission objectives into resilient deployments under zero-fail constraints.`);
  } else if (choiceIndex === 2) {
    console.log(`${c.neonYellow}${c.bold}=== [3] LIVE PROJECTS & GITHUB REPOSITORIES ===${c.reset}`);
    for (const p of profileData.projects) {
      console.log(`  ${c.neonGreen}▸${c.reset} ${c.bold}${p.name}:${c.reset} ${c.underline}${p.url}${c.reset}`);
    }
    console.log(`${c.gray}  [Opening GitHub Profile in default browser...]${c.reset}`);
    openUrl(profileData.github);
  } else if (choiceIndex === 3) {
    console.log(`${c.neonCyan}${c.bold}=== [4] CERTIFICATIONS, CREDENTIALS & CLEARANCE ===${c.reset}`);
    console.log(`  • AWS Certified Solutions Architect (SAA-C03 Architecture Track)`);
    console.log(`  • Databricks Lakehouse & PySpark Data Engineering`);
    console.log(`  • U.S. Army Special Forces Operations & Intelligence Sergeant (18Z / 18F)`);
  } else if (choiceIndex === 4) {
    console.log(`${c.neonGreen}[✓] Launching Interactive Web Portfolio:${c.reset} ${c.underline}${profileData.web_card}${c.reset}`);
    openUrl(profileData.web_card);
  } else if (choiceIndex === 5) {
    console.log(`${c.neonCyan}[✓] Direct Contact & LinkedIn:${c.reset}`);
    console.log(`  • LinkedIn: ${c.underline}${profileData.linkedin}${c.reset}`);
    console.log(`  • Email:    ${c.underline}mailto:${profileData.email}${c.reset}`);
    openUrl(profileData.linkedin);
  }
  console.log('');
}

const sectionIdx = args.indexOf('--section');
if (sectionIdx !== -1 && args[sectionIdx + 1]) {
  const num = parseInt(args[sectionIdx + 1], 10);
  if (num >= 1 && num <= 6) {
    printSection(num - 1);
    process.exit(0);
  }
}

renderCard();

const shouldRunMenu =
  process.stdin.isTTY &&
  process.stdout.isTTY &&
  !args.includes('--no-interactive') &&
  !process.env.CI;

if (!shouldRunMenu) {
  process.exit(0);
}

const menuItems = [
  '1. Core Competencies & Cloud Architecture',
  '2. Experience & Leadership History',
  '3. Live Projects & GitHub Repos (Open Browser)',
  '4. Certifications & Credentials',
  '5. Open Interactive Web Portfolio (Open Browser)',
  '6. Direct Contact & LinkedIn (Open Browser)',
  '0. Exit'
];

let selected = 0;

function drawMenu(firstDraw = false) {
  if (!firstDraw) {
    process.stdout.write(`\x1b[${menuItems.length + 1}A`);
  }
  console.log(`${c.neonCyan}${c.bold}?${c.reset} ${c.bold}What would you like to explore?${c.reset} ${c.gray}(Use ↑/↓ arrows or keys 1-6, Enter to select, 0/q to exit)${c.reset}`);
  menuItems.forEach((item, idx) => {
    const isSel = idx === selected;
    const prefix = isSel ? `${c.neonGreen}❯ ` : '  ';
    const text = isSel ? `${c.neonGreen}${c.bold}${item}${c.reset}` : `${c.white}${item}${c.reset}`;
    process.stdout.write(`\x1b[2K${prefix}${text}\n`);
  });
}

readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);
drawMenu(true);

process.stdin.on('keypress', (str, key) => {
  if (!key) return;
  if ((key.ctrl && key.name === 'c') || key.name === 'q' || str === '0') {
    process.stdin.setRawMode(false);
    console.log(`\n${c.gray}Connection closed. Stay frosty.${c.reset}`);
    process.exit(0);
  }
  if (key.name === 'up') {
    selected = (selected - 1 + menuItems.length) % menuItems.length;
    drawMenu(false);
  } else if (key.name === 'down') {
    selected = (selected + 1) % menuItems.length;
    drawMenu(false);
  } else if (['1', '2', '3', '4', '5', '6'].includes(str)) {
    selected = parseInt(str, 10) - 1;
    drawMenu(false);
    printSection(selected);
    drawMenu(true);
  } else if (key.name === 'return' || key.name === 'enter') {
    if (selected === menuItems.length - 1) {
      process.stdin.setRawMode(false);
      console.log(`\n${c.gray}Connection closed. Stay frosty.${c.reset}`);
      process.exit(0);
    }
    printSection(selected);
    drawMenu(true);
  }
});
