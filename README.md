<div align="center">
  
  <img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&height=250&section=header&text=Indra%20Ai&fontSize=80&animation=fadeIn&fontAlignY=35&desc=The%20Next-Gen%20Autonomous%20AI%20Platform&descAlignY=55&descAlign=50" alt="header" />

  <p align="center">
    <strong>Build, Deploy, and Run Next-Generation Autonomous AI Agents with Visual Workflows</strong>
  </p>

  <p align="center">
    <a href="#-what-is-indra-ai"><img src="https://img.shields.io/badge/Status-Active-success?style=for-the-badge&logo=appveyor" alt="Status" /></a>
    <a href="#-getting-started"><img src="https://img.shields.io/badge/Version-1.0.0-blue?style=for-the-badge&logo=v" alt="Version" /></a>
    <a href="#-license"><img src="https://img.shields.io/badge/License-MIT-purple?style=for-the-badge" alt="License" /></a>
    <a href="https://github.com/indrajitkumar23541-a11y/Indra-Ai"><img src="https://img.shields.io/github/stars/indrajitkumar23541-a11y/Indra-Ai?style=for-the-badge&logo=github&color=yellow" alt="Stars" /></a>
  </p>
  
  <em>Crafted with ❤️ by Indrajit Kumar</em>
</div>

<br />

---

## 🌌 What is Indra Ai?

**Indra Ai** is a powerful, highly-customizable, node-based automation platform designed to create, deploy, and manage continuous AI agents. Built entirely independently by **Indrajit Kumar**, this platform represents the cutting-edge of autonomous AI task management.

Instead of just chatting with an AI, Indra Ai allows you to build **visual workflows** (like a flowchart) where AI can browse the web, read databases, post on social media, and execute code continuously in the background. It provides the ultimate workspace to bring complex automation ideas to life.

---

## ✨ Premium Features

<table>
  <tr>
    <td align="center" width="50%">
      <h3>🧱 Visual Agent Builder</h3>
      <p>An intuitive, low-code interface allowing you to design and configure your own AI agents effortlessly. Drag and drop logical blocks (e.g., "Read Email", "Analyze with Qwen", "Send Slack Message") and connect them to form a workflow.</p>
    </td>
    <td align="center" width="50%">
      <h3>💽 Continuous Execution</h3>
      <p>Trigger workflows based on time (cron jobs), webhooks, or incoming API requests. Deploy an agent once and let it run 24/7 on the robust backend infrastructure.</p>
    </td>
  </tr>
  <tr>
    <td align="center" width="50%">
      <h3>🧠 Advanced LLM Integrations</h3>
      <p>Native support for Alibaba's Qwen DashScope models (<code>qwen-max</code>, <code>qwen-plus</code>) for lightning-fast reasoning. Easily integrate with OpenAI, Anthropic, or local LLMs (via Ollama).</p>
    </td>
    <td align="center" width="50%">
      <h3>📊 Real-Time Analytics</h3>
      <p>Keep track of your agents' performance, view detailed execution logs, and gain insights to continually optimize your automation processes in real-time.</p>
    </td>
  </tr>
</table>

---

## 🏗️ Architecture

Indra Ai is built on a highly scalable, modern architecture separated into three main layers:

- 🎨 **The Canvas (Frontend):** Users access the Web UI to build workflows. When a user connects blocks together, the frontend generates a JSON graph representing the logic.
- ⚙️ **The Orchestrator (Backend API):** The Next.js/FastAPI backend receives the graph, validates it, and schedules the execution. It manages user authentication, API keys, and workspace storage.
- ⚡ **The Execution Engine (Workers):** Background workers pick up the tasks from the queue (Redis/RabbitMQ) and execute the blocks step-by-step. If a block requires calling an LLM (like Qwen), the engine makes the API call, processes the result, and passes it to the next block in the graph.

---

## 💎 Tech Stack

Indra Ai leverages a premium, enterprise-grade technology stack:

<div align="center">
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white" />
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
  <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" />
  <img src="https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white" />
  <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" />
  <img src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white" />
  <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" />
  <img src="https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white" />
</div>

---

## 🚀 Quick Start (Self-Hosting)

> **Note:** Setting up and hosting the Indra Ai Platform is designed for developers and tech enthusiasts.

### System Requirements
- **CPU:** 4+ cores recommended
- **RAM:** Minimum 8GB (16GB recommended)
- **Software:** Docker Engine, Docker Compose, Git.

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/indrajitkumar23541-a11y/Indra-Ai.git

# 2. Navigate to the platform directory
cd Indra-Ai/autogpt_platform

# 3. Start the infrastructure
docker compose up -d
```

Once all containers are successfully running, open your browser and navigate to `http://localhost:3000` to access the Indra Ai interface and start building your first agent!

---

## 📂 Project Structure

```text
Indra-Ai/
├── autogpt_platform/
│   ├── backend/           # FastAPI based backend execution engine
│   ├── frontend/          # Next.js + React Flow frontend canvas
│   ├── autogpt_libs/      # Shared Python libraries for the platform
│   ├── analytics/         # Telemetry and analytics configurations
│   ├── db/                # Database migrations and schemas
│   └── docker-compose.yml # Infrastructure deployment configurations
├── classic/               # Legacy AI agent components
├── docs/                  # Project documentation and guides
├── assets/                # Images and brand assets
└── README.md              # Project overview
```

---

## 👨‍💻 About the Creator

**Indra Ai** is an independent project architected, developed, and maintained by **Indrajit Kumar**. 
Driven by a deep passion for Artificial Intelligence, Automation, and scalable system design, this project aims to democratize access to powerful, continuous AI agents for developers worldwide.

<br />

<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&height=100&section=footer" width="100%" />
  <p>Released under the <strong>MIT License</strong>.</p>
  <p>© 2026 Indrajit Kumar</p>
</div>
