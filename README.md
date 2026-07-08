<div align="center">
  <img src="https://img.shields.io/badge/Status-Active-success?style=for-the-badge&logo=appveyor" />
  <img src="https://img.shields.io/badge/Version-1.0.0-blue?style=for-the-badge&logo=v" />
  <img src="https://img.shields.io/badge/License-MIT-purple?style=for-the-badge" />
  
  <h1 align="center">Indra Ai 🚀</h1>
  <p align="center">
    <strong>The Ultimate Platform to Build, Deploy, and Run Next-Generation Autonomous AI Agents</strong>
    <br />
    <em>Crafted with ❤️ by Indrajit Kumar</em>
  </p>
</div>

---

## 🌟 What is Indra Ai?

**Indra Ai** is a powerful, highly-customizable, node-based automation platform designed to create, deploy, and manage continuous AI agents. Built entirely independently by **Indrajit Kumar**, this platform represents the cutting-edge of autonomous AI task management.

Instead of just chatting with an AI, Indra Ai allows you to build **visual workflows** (like a flowchart) where AI can browse the web, read databases, post on social media, and execute code continuously in the background. It provides the ultimate workspace to bring complex automation ideas to life.

---

## 🚀 Key Features

### 🧱 1. Visual Agent Builder (Drag & Drop)
The Indra Ai frontend offers an intuitive, low-code interface allowing you to design and configure your own AI agents effortlessly. 
- **Block-Based Architecture:** Drag and drop logical blocks (e.g., "Read Email", "Analyze with Qwen", "Send Slack Message") and connect them to form a workflow.
- **No-Code / Low-Code:** You don't need to be a senior developer to build complex AI pipelines.

### 💽 2. Continuous & Autonomous Execution
Unlike standard chatbots that wait for your prompt, Indra Ai agents can run continuously.
- **Event-Driven Triggers:** Trigger workflows based on time (cron jobs), webhooks, or incoming API requests.
- **Background Processing:** Deploy an agent once and let it run 24/7 on the robust backend infrastructure.

### 🧠 3. Advanced LLM Integrations
- **Native Qwen Support:** Direct, out-of-the-box support for Alibaba's Qwen DashScope models (`qwen-max`, `qwen-plus`, `qwen-turbo`), providing state-of-the-art reasoning at exceptional speeds.
- **Multi-Model Support:** Easily integrate with OpenAI, Anthropic, or local LLMs (via Ollama) within the same workflow.

### 📊 4. Real-Time Monitoring & Analytics
Keep track of your agents' performance, view detailed execution logs, and gain insights to continually optimize your automation processes.

---

## ⚙️ How It Works (Architecture)

Indra Ai is built on a highly scalable, modern architecture separated into three main layers:

1. **The Canvas (Frontend):** 
   Users access the Web UI to build workflows. When a user connects blocks together, the frontend generates a JSON graph representing the logic.
   
2. **The Orchestrator (Backend API):** 
   The Next.js/FastAPI backend receives the graph, validates it, and schedules the execution. It manages user authentication, API keys, and workspace storage.
   
3. **The Execution Engine (Workers):** 
   Background workers pick up the tasks from the queue (Redis/RabbitMQ) and execute the blocks step-by-step. If a block requires calling an LLM (like Qwen), the engine makes the API call, processes the result, and passes it to the next block in the graph.

---

## 🛠️ Tools & Technologies Used

Indra Ai leverages a premium, enterprise-grade technology stack:

### Frontend
- **[Next.js](https://nextjs.org/):** The React framework for production, enabling server-side rendering and fast page loads.
- **[TailwindCSS](https://tailwindcss.com/):** For highly customizable, responsive, and beautiful user interfaces.
- **[React Flow](https://reactflow.dev/):** Used to power the interactive drag-and-drop node-based Agent Builder canvas.

### Backend
- **[Python](https://www.python.org/) & [FastAPI](https://fastapi.tiangolo.com/):** High-performance backend execution engine to process AI logic quickly and asynchronously.
- **[Prisma](https://www.prisma.io/):** Next-generation ORM used to safely interact with the database.

### Database & Infrastructure
- **[PostgreSQL](https://www.postgresql.org/):** The world's most advanced open-source relational database for storing user data and agent configurations.
- **[Supabase](https://supabase.com/):** Provides secure Authentication and real-time database capabilities.
- **[Docker](https://www.docker.com/):** Used to containerize the entire platform, making it incredibly easy to deploy across different environments.
- **[Redis](https://redis.io/):** In-memory data structure store used for message queuing and caching execution states.

---

## ⚡ Real-World Use Cases

Here are just a few examples of what you can achieve with **Indra Ai**:

1. **Social Media Automation:**
   - Automatically monitor trending topics on Twitter/Reddit.
   - Use an LLM to generate engaging posts and publish them directly to your accounts on a schedule.

2. **Autonomous Research Agent:**
   - Give the agent a topic. It will search the web, read articles, synthesize the information, and compile a comprehensive PDF report.

3. **Customer Support Triage:**
   - Connect Indra Ai to your support inbox. It will read incoming emails, categorize them, and draft context-aware replies for your team.

---

## 💻 Getting Started (Self-Hosting)

> **Note:** Setting up and hosting the Indra Ai Platform is designed for developers and tech enthusiasts.

### System Requirements
- **CPU:** 4+ cores recommended
- **RAM:** Minimum 8GB (16GB recommended)
- **Software Required:** Docker Engine, Docker Compose, Git.

### Quick Setup

Clone the repository and run the setup using Docker Compose:

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

## 👨‍💻 About the Creator

**Indra Ai** is an independent project architected, developed, and maintained by **Indrajit Kumar**. 
Driven by a deep passion for Artificial Intelligence, Automation, and scalable system design, this project aims to democratize access to powerful, continuous AI agents for developers worldwide.

---

<div align="center">
  <p>Released under the MIT License.</p>
  <p>© 2026 Indrajit Kumar</p>
</div>
