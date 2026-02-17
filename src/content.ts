export type ExperienceItem = {
  role: string
  time: string
  bullets: string[]
  tags: string[]
}

export type ProjectItem = {
  title: string
  link: string
  bullets: string[]
  tags: string[]
}

export type ResearchItem = {
  title: string
  year: string
  role: string
  summary: string
  tags: string[]
  link?: string
}

export const aboutMe = 'I specialize in AI/ML systems, backend engineering, and performance optimization. My work spans LangChain/LangGraph orchestration, retrieval-augmented generation (RAG), and serverless architectures. I’m passionate about building fast, reliable, and portable solutions.'

export const portraitUrl = 'https://avatars.githubusercontent.com/hulkbusterks'

const basePath = import.meta.env.BASE_URL

export const credlyBadgeUrl = `${basePath}credly-badge.png`
export const credlyPage = 'https://www.credly.com/badges/053db98e-b97e-4f90-a06d-81008ee3d153/public_url'

export const experience: ExperienceItem[] = [
  {
    role: 'Graduate Engineer Trainee, Sopra Steria',
    time: 'Aug 2025 – Present',
    bullets: [
      'Developed internal proof-of-concepts (POCs) utilizing React, demonstrating strong problem-solving skills and Innovative thinking',
      'Created an Employee Management System, enhancing operational efficiency and user experience',
      'Implemented an Azure Al-powered README generator, showcasing expertise in integrating machine learning with software solutions',
      'Emphasized clean architecture principles and scalable design, ensuring maintainability and adaptability of applications',
      'Gained hands-on experience with Al technologies, preparing for a transition Into a Machine Learning Engineer',
    ],
    tags: ['Java/.NET', 'React'],
  },
  {
    role: 'Freelance AI Developer (Contract), Government Education Project',
    time: 'Aug 2025',
    bullets: [
      'Joined during optimization phase to enhance backend and AI infrastructure.',
      'Implemented scalable chat API handling using AWS SQS to manage rate limits and ensure sustained load.',
      'Deployed services via Docker on AWS EC2 and Lambda, DynamoDb for data, balancing cost and performance.',
      'Designed model selection strategy to combine smaller models for simpler tasks, reducing latency and cost.',
      'Load-tested with k6 to 1000 VUs (10-min run; ~6–7m sustain) with <1% failures.',
    ],
    tags: ['AWS Lambda', 'DynamoDB', 'Python'],
  },
  {
    role: 'AI Backend Intern, Salzaa',
    time: 'Jan 2025 – Apr 2025',
    bullets: [
      'Owned backend for fast-fashion e-commerce platform: DB design, API development, deployment, and hosting.',
      'Built recommendation engine using user activity signals (likes, cart adds, chatbot interactions).',
      'Developed multimodal chatbot with branching workflows, retry logic, prompt caching, and dynamic model routing to minimize LLM costs.',
      'Integrated Hugging Face virtual try-on model; implemented rate limiting and retry strategies for expensive inference calls.',
      'Ensured reliability with timeouts, backoff, and idempotency across services.',
    ],
    tags: ['FastAPI', 'LangGraph', 'Azure', 'Pinecone'],
  },
]

export const projects: ProjectItem[] = [
  {
    title: 'Redgo (Distributed High-Performance Key-Value Store)',
    link: 'https://github.com/hulkbusterks/redgo',
    tags: ['Go', 'TCP/QUIC', 'Bitcask'],
    bullets: [
      'Developed a Go-based store for LLM caching featuring a custom binary protocol with CRC32 checksums for data integrity.',
      'Optimized concurrency using Lock Striping (64-shards) and sync.Pool, significantly reducing GC pressure and lock contention.',
    ],
  },
  {
    title: 'Accountability Partner (AI-based Goal Tracking)',
    link: 'https://github.com/hulkbusterks/accountability-partner',
    tags: ['FastAPI', 'LLM tool calling', 'FAISS'],
    bullets: [
      'Converts free-form input into structured tasks/reminders via FastAPI + LLM tool-calling prompts.',
      'Embeddings in FAISS; top-k retrieval to ground follow-ups and reminders.',
    ],
  },
  {
    title: 'Creator Twin (Persona-conditioned content for influencers)',
    link: 'https://github.com/jaaydenh/creator-twin',
    tags: ['LangChain', 'Retrieval + memory', 'Tone consistency'],
    bullets: [
      'Persona-conditioned generation using LangChain with retrieval + memory for tone consistency.',
      'Multiple context sources (notes/docs/DB) to reduce repetition.',
    ],
  },
  {
    title: 'News Aggregator (AI-based summarization & accessibility)',
    link: 'https://github.com/hulkbusterks/news-aggregator',
    tags: ['RSS ingestion', 'Summaries', 'PostgreSQL'],
    bullets: [
      'RSS ingestion + deduplication; summaries for aggregated items.',
      'Translation and explanation features; persisted history in PostgreSQL.',
    ],
  },
]

export const research: ResearchItem[] = [
  {
    title: 'Hybrid Actor-Critic RL for Autonomous Driving',
    year: '2025',
    role: 'Co-author',
    summary: `Hybrid actor-critic policy design for autonomous driving
    focused on stability and sample efficiency in simulation.`,
    link: 'https://ieeexplore.ieee.org/document/10065317/',
    tags: ['Reinforcement Learning', 'Autonomous Driving', 'Actor-Critic'],
  },
  {
    title: 'Sentiment Analysis in Literature',
    year: '2022',
    role: 'Co-author',
    summary: `Compared sentiment methods on long-form literary text
    explored model behavior on figurative language and context drift.`,
    link: 'https://ieeexplore.ieee.org/document/10065317/',
    tags: ['NLP', 'Sentiment Analysis', 'Long-form text'],
  },
]

