#!/usr/bin/env node

import chalk from 'chalk';
import boxen from 'boxen';
import inquirer from 'inquirer';
import open from 'open';

if (process.stdout && typeof process.stdout.setDefaultEncoding === 'function') {
  process.stdout.setDefaultEncoding('utf8');
}

const args = process.argv.slice(2);

// Helper for OSC 8 clickable terminal hyperlinks
function terminalLink(text, url) {
  return `\u001B]8;;${url}\u0007${text}\u001B]8;;\u0007`;
}

// Hosted resume asset URL (Update path if different)
const RESUME_URL = 'https://raw.githubusercontent.com/freefades2black/freefades2black-card/main/resume.pdf';

const profileData = {
  handle: 'FreeFades2Black',
  name: 'WILLIAM "FREE" HALL',
  title: 'Principal Cloud & AI Architect | DevSecOps Lead',
  military: '18Z / 18F, Special Forces (Green Beret) & USMC Veteran | Oaken Sky Cloud Solutions',
  phone: '(910) 584-3843',
  email: 'whall4.wh@gmail.com',
  location: 'Niceville / Destin, FL (Remote · Hybrid · On-site)',
  resume_url: RESUME_URL,
  github: 'https://github.com/freefades2black',
  linkedin: 'https://linkedin.com/in/freefades2black',
  core_tech: ['AWS', 'Azure Gov', 'GCP', 'Terraform', 'Kubernetes', 'Databricks', 'PySpark']
};

if (args.includes('--json')) {
  console.log(JSON.stringify(profileData, null, 2));
  process.exit(0);
}

function clearScreen() {
  if (process.stdout.isTTY && !args.includes('--no-interactive')) {
    process.stdout.write('\x1Bc');
  }
}

function renderHeaderCard() {
  const content = [
    `${chalk.bold.white('WILLIAM "FREE" HALL')}`,
    `${chalk.cyan.bold('Principal Cloud & AI Architect | DevSecOps Lead')}`,
    `${chalk.dim('Special Forces (Green Beret) & USMC Veteran | Oaken Sky Cloud Solutions')}`,
    '',
    `${chalk.white('Architecting secure multi-cloud environments, zero-trust governance,')}`,
    `${chalk.white('and distributed data/AI pipelines across AWS, Azure Gov, and GCP.')}`,
    '',
    `${chalk.bold.gray('PHONE:')}    (910) 584-3843`,
    `${chalk.bold.gray('EMAIL:')}    whall4.wh@gmail.com`,
    `${chalk.bold.gray('LOCATION:')} Niceville / Destin, FL (Remote · Hybrid · On-site)`,
    `${chalk.bold.gray('RESUME:')}   ${chalk.green(terminalLink('View / Download PDF', RESUME_URL))} ${chalk.dim('(Ctrl/Cmd + click)')}`,
    `${chalk.bold.gray('GITHUB:')}   ${terminalLink('github.com/freefades2black', 'https://github.com/freefades2black')}`,
    `${chalk.bold.gray('LINKEDIN:')} ${terminalLink('linkedin.com/in/freefades2black', 'https://linkedin.com/in/freefades2black')}`,
    '',
    `${chalk.bold.gray('CORE TECH:')} AWS | Azure Gov | GCP | Terraform | Kubernetes | Databricks | PySpark`
  ].join('\n');

  console.log(boxen(content, {
    padding: 1,
    margin: { top: 1, bottom: 1, left: 1, right: 1 },
    borderStyle: 'single',
    borderColor: 'gray'
  }));
}

function displayExecutiveSummary() {
  clearScreen();
  console.log(boxen(
    `${chalk.bold.cyan('EXECUTIVE PROFILE & METHODOLOGY')}\n\n` +
    `${chalk.bold.white('Bridging 20+ Years Elite Military Operations & Enterprise Cloud Transformation')}\n\n` +
    `• ${chalk.bold('Architectural Governance:')} Multi-cloud landing zones across AWS, Azure Gov, and GCP; eliminating configuration drift and minimizing blast radius.\n` +
    `• ${chalk.bold('DevSecOps & Zero-Trust:')} Automated IAM boundaries, secret management, container security gates, and policy-as-code enforcement.\n` +
    `• ${chalk.bold('Distributed Data & ML Systems:')} High-throughput PySpark pipelines, Databricks Medallion frameworks, and containerized ingestion engines.\n` +
    `• ${chalk.bold('Command Leadership:')} High-pressure decision-making, executive risk communication, and technical mentoring rooted in operational excellence.\n` +
    `• ${chalk.bold('Flagship Project:')} Architect of "For Your Service" — an open-source tensor matching system integrating Google Cloud Identity controls via Terraform and PySpark analytics.`,
    { padding: 1, borderStyle: 'round', borderColor: 'cyan' }
  ));
}

function displayEducationAndCredentials() {
  clearScreen();
  console.log(boxen(
    `${chalk.bold.cyan('ACADEMIC CREDENTIALS & SPECIALIZED TRAINING')}\n\n` +
    `🎓 ${chalk.bold.white('American Military University')} (2020 – 2022)\n` +
    `   ${chalk.dim('Bachelor of Science (BS) in Cybersecurity')}\n` +
    `   Focus: Cyber defense operations, digital forensics, incident investigations, network topologies.\n\n` +
    `🎓 ${chalk.bold.white('Syracuse University — Onward to Opportunity')} (2022 – 2023)\n` +
    `   ${chalk.dim('Network Security Program | Grade: 4.0')}\n` +
    `   Focus: Cyber/electronic warfare operations, network security policies, IaC automation.\n\n` +
    `🎓 ${chalk.bold.white('Northwest Florida State College')} (2018 – 2020)\n` +
    `   ${chalk.dim('Associate of Arts (AA) in Computer Programming')}\n` +
    `   Focus: Software architecture, data structures, Python, Java, C++, C#.\n\n` +
    `📜 ${chalk.bold.white('SkillStorm Enterprise Cloud Apprenticeship')} (2023)\n` +
    `   ${chalk.dim('AWS Cloud Architect Program')}\n` +
    `   Focus: Fault-tolerant architectures, automated migration strategies, security compliance.\n\n` +
    `🛡️  ${chalk.bold.white('Active Certifications & Credentials:')}\n` +
    `   • AWS Certified Cloud Practitioner\n` +
    `   • Microsoft Certified: Azure Fundamentals (AZ-900)\n` +
    `   • U.S. Department of Labor Cloud Engineer Apprenticeship Certification`,
    { padding: 1, borderStyle: 'round', borderColor: 'cyan' }
  ));
}

function displayTechnicalStack() {
  clearScreen();
  console.log(boxen(
    `${chalk.bold.cyan('TECHNICAL STACK & CAPABILITIES')}\n\n` +
    `• ${chalk.bold.white('Cloud Platforms:')}    AWS (Commercial & GovCloud), Microsoft Azure, Google Cloud Platform (GCP)\n` +
    `• ${chalk.bold.white('IaC & Automation:')}   Terraform, Ansible, Docker, Kubernetes, GitHub Actions, HashiCorp Vault\n` +
    `• ${chalk.bold.white('Data & AI Systems:')}  Databricks, PySpark, Python, Hugging Face, Data Modeling, Medallion Arch\n` +
    `• ${chalk.bold.white('Security & Systems:')} Linux (RHEL, Ubuntu, Arch), Zero-Trust IAM, Policy-as-Code (Checkov), CI/CD telemetry`,
    { padding: 1, borderStyle: 'round', borderColor: 'cyan' }
  ));
}

if (args.includes('--summary')) {
  displayExecutiveSummary();
  process.exit(0);
}
if (args.includes('--education')) {
  displayEducationAndCredentials();
  process.exit(0);
}
if (args.includes('--stack')) {
  displayTechnicalStack();
  process.exit(0);
}

async function runInteractiveMenu() {
  clearScreen();
  renderHeaderCard();

  if (!process.stdin.isTTY || !process.stdout.isTTY || args.includes('--no-interactive') || process.env.CI) {
    return;
  }

  const { selection } = await inquirer.prompt([
    {
      type: 'list',
      name: 'selection',
      message: 'Explore profile details or select an action:',
      pageSize: 8,
      choices: [
        { name: '📄 Open Resume (PDF in Browser)', value: 'resume' },
        { name: '🎖️  View Executive Summary & Core Pillars', value: 'summary' },
        { name: '🎓 View Education & Credentials', value: 'education' },
        { name: '⚙️  View Complete Technical Stack', value: 'stack' },
        { name: '💻 Launch GitHub Portfolio', value: 'github' },
        { name: '🔗 Open LinkedIn Profile', value: 'linkedin' },
        { name: '📧 Compose Email to Free', value: 'email' },
        { name: '🚪 Exit', value: 'exit' }
      ]
    }
  ]);

  switch (selection) {
    case 'resume':
      console.log(chalk.dim('\nOpening resume in default browser...'));
      await open(RESUME_URL);
      await pausePrompt();
      break;
    case 'summary':
      displayExecutiveSummary();
      await pausePrompt();
      break;
    case 'education':
      displayEducationAndCredentials();
      await pausePrompt();
      break;
    case 'stack':
      displayTechnicalStack();
      await pausePrompt();
      break;
    case 'github':
      await open('https://github.com/freefades2black');
      await pausePrompt();
      break;
    case 'linkedin':
      await open('https://linkedin.com/in/freefades2black');
      await pausePrompt();
      break;
    case 'email':
      await open('mailto:whall4.wh@gmail.com');
      await pausePrompt();
      break;
    case 'exit':
      clearScreen();
      process.exit(0);
  }
}

async function pausePrompt() {
  await inquirer.prompt([
    {
      type: 'input',
      name: 'back',
      message: chalk.dim('\nPress Enter to return to main menu...')
    }
  ]);
  return runInteractiveMenu();
}

runInteractiveMenu();
