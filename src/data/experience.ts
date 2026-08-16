export interface ExperienceEntry {
  id: string;
  company: string;
  client: string;
  role: string;
  dates: string;
  summary: string;
  bullets: string[];
  tech: string[];
}

export const experience: ExperienceEntry[] = [
  {
    id: "citi",
    company: "Tata Consultancy Services",
    client: "Client: Citi Bank",
    role: "Backend Software Engineer",
    dates: "Mar 2024 — Present",
    summary:
      "Building the reconciliation and reporting backbone for corporate action trades in Citi's Capital Markets stack.",
    bullets: [
      "Designed and built a reconciliation engine in Java/Spring Boot to classify corporate action trades as reconciled or unreconciled, reducing manual operational review by 4 hours/day.",
      "Developed 8+ Spring Boot REST APIs for trade status and reporting, integrated with internal operational dashboards.",
      "Improved trade lookup performance by 30–40% through Oracle SQL query optimization, composite indexing, and execution-plan tuning.",
      "Achieved 90%+ unit test coverage (JUnit/NRT), reducing production defects and enabling stable CI/CD releases.",
      "Led root-cause analysis for critical production incidents in high-impact financial systems, delivering fixes within SLA.",
      "Built a reusable file-validation and SWIFT/CPE message-formatting utility framework used across the reconciliation workflow.",
    ],
    tech: ["Java", "Spring Boot", "Oracle SQL", "REST APIs", "JUnit", "SWIFT"],
  },
  {
    id: "wells-fargo",
    company: "Tata Consultancy Services",
    client: "Client: Wells Fargo",
    role: "Associate Backend Software Engineer",
    dates: "Aug 2022 — Mar 2024",
    summary:
      "Automated SWIFT corporate-action messaging workflows end-to-end for Wells Fargo's Capital Markets operations.",
    bullets: [
      "Built an end-to-end automation pipeline for SWIFT MT564/566/567/568 corporate action messages, cutting manual processing effort by 60%.",
      "Developed an Excel bulk-upload system handling 10k+ records with validation and audit logging, reducing onboarding errors by 35%.",
      "Owned corporate action notification workflows, ensuring 100% SWIFT/ISO compliance.",
      "Resolved 20+ SIT/UAT defects, improving delivery efficiency and reducing defect cycle time.",
    ],
    tech: ["Java", "Spring Boot", "SWIFT MT56x", "SQL", "Audit Logging"],
  },
];
