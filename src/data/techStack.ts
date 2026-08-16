export interface TechGroup {
  label: string;
  items: string[];
}

export const techStack: TechGroup[] = [
  { label: "Backend", items: ["Java", "Spring Boot", "Spring Data JPA", "Spring Security", "REST APIs", "Microservices"] },
  { label: "Databases", items: ["Oracle SQL", "PostgreSQL", "MongoDB"] },
  { label: "Messaging & Caching", items: ["Apache Kafka", "Caffeine"] },
  { label: "DevOps & Tools", items: ["Docker", "Jenkins", "Git", "Maven", "Flyway"] },
  { label: "Languages", items: ["Java", "Python", "SQL", "C/C++"] },
  { label: "Engineering", items: ["System Design", "Design Patterns", "Data Structures & Algorithms", "OOP"] },
];

export const dsaCategories = [
  "LinkedList",
  "Stack",
  "Tree",
  "Graph",
  "Dynamic Programming",
];
