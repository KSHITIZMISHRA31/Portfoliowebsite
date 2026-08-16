export type ProjectCategory = "Java" | "Backend" | "AI" | "DSA";
export type ProjectStatus = "Currently building" | "Complete" | "Ongoing coursework";

export interface ArchitectureNode {
  id: string;
  label: string;
  detail: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  categories: ProjectCategory[];
  tech: string[];
  status: ProjectStatus;
  github: string;
  liveDemo?: string;
  featured?: boolean;
  // Case-study only fields (featured projects)
  problem?: string;
  solution?: string;
  engineeringDecisions?: { title: string; detail: string }[];
  challenges?: string[];
  futureImprovements?: string[];
  architecture?: ArchitectureNode[];
}

export const projects: Project[] = [
  {
    id: "job-agent",
    name: "Job Agent",
    description:
      "An AI-powered backend that onboards companies, discovers jobs from their career pages, and analyzes resumes against them.",
    categories: ["Java", "Backend", "AI"],
    tech: [
      "Java 21",
      "Spring Boot 3.5",
      "PostgreSQL",
      "MongoDB",
      "Flyway",
      "Gemini API",
      "Jsoup",
      "Apache PDFBox",
      "Caffeine",
    ],
    status: "Currently building",
    github: "https://github.com/KSHITIZMISHRA31/job-agent",
    featured: true,
    problem:
      "Job hunting means manually checking dozens of company career pages and rewriting the same resume angle for each one. There's no structured, queryable view of \"which companies are hiring for what, and how well do I match.\"",
    solution:
      "A modular Spring Boot backend that treats company onboarding, job discovery, and resume analysis as independent pipelines: scrape a career page, let Gemini turn the unstructured HTML into structured company/job data, persist it, and match it against a parsed resume.",
    engineeringDecisions: [
      {
        title: "Dual persistence, split by data shape",
        detail:
          "Relational data (users, companies, jobs) lives in PostgreSQL under Spring Data JPA with Flyway-versioned migrations. AI-extracted resume analysis — inherently semi-structured — goes to MongoDB instead of forcing it into rigid columns.",
      },
      {
        title: "A resilience layer around the LLM dependency",
        detail:
          "Gemini model availability and naming shift over time. Instead of hardcoding a model string, the execution engine discovers available models at runtime, caches the last one that worked (Caffeine), and falls back automatically if it starts failing — the app isn't coupled to any single model version.",
      },
      {
        title: "Factory + Strategy for the scraper",
        detail:
          "Page downloading is abstracted behind a PageDownloader interface, with a DownloaderFactory choosing between a Jsoup implementation (live) and a Playwright implementation (scaffolded for JS-heavy pages) — so the crawler doesn't care which one actually fetched the page.",
      },
    ],
    challenges: [
      "Career pages have no shared structure — the AI-extraction step exists specifically because writing a scraper per company doesn't scale.",
      "LLM output isn't guaranteed structured JSON on every call — the execution engine's fallback/caching logic exists to absorb that unreliability rather than let one bad response break onboarding.",
    ],
    futureImprovements: [
      "Expose job discovery as REST endpoints (currently runner-triggered, not API-triggered)",
      "Implement the Playwright fallback downloader for JavaScript-rendered career pages",
      "Add JUnit/Mockito test coverage and Testcontainers-based integration tests",
      "Containerize with Docker Compose",
      "Ship the in-progress React/Vite/TypeScript frontend",
    ],
    architecture: [
      { id: "user", label: "User", detail: "Registers, uploads a resume via multipart POST." },
      { id: "api", label: "Spring Boot API", detail: "Company CRUD + resume upload endpoints; job discovery currently runner-triggered." },
      { id: "scraper", label: "Scraper Layer", detail: "DownloaderFactory → Jsoup (live) or Playwright (scaffolded) fetches career-page HTML." },
      { id: "ai", label: "Gemini Execution Engine", detail: "Discovers available models, caches the working one (Caffeine), extracts structured data with automatic fallback." },
      { id: "postgres", label: "PostgreSQL", detail: "Relational store for users, companies, jobs — schema versioned via Flyway." },
      { id: "mongo", label: "MongoDB", detail: "Stores AI-generated resume analysis documents." },
    ],
  },
  {
    id: "cataract-detection",
    name: "Cataract Detection",
    description:
      "B.Tech major project — classical ML and a small neural net compared on detecting cataracts from eye images.",
    categories: ["AI"],
    tech: ["Python", "OpenCV", "scikit-learn", "TensorFlow/Keras"],
    status: "Ongoing coursework",
    github: "https://github.com/KSHITIZMISHRA31/Cataract-Detection",
  },
  {
    id: "twitter-sentiment",
    name: "Twitter Sentiment Analysis",
    description:
      "TF-IDF vectorization feeding SVM and Naive Bayes classifiers to label tweet sentiment.",
    categories: ["AI"],
    tech: ["Python", "scikit-learn", "TF-IDF"],
    status: "Ongoing coursework",
    github: "https://github.com/KSHITIZMISHRA31/Twitter-Sentiment-Analysis",
  },
  {
    id: "deep-learning",
    name: "Deep Learning Coursework",
    description:
      "Notebooks covering ANN fundamentals — CIFAR-10 image classification, digit recognition, churn prediction.",
    categories: ["AI"],
    tech: ["Python", "TensorFlow/Keras"],
    status: "Ongoing coursework",
    github: "https://github.com/KSHITIZMISHRA31/Deep-Learning",
  },
];
