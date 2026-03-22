// import { Subject } from "../types";

import { Subject } from "@/types";

export const MOCK_SUBJECTS: Subject[] = [
  {
    id: 1,
    code: "CS101",
    name: "Introduction to Programming",
    department: "Computer Science",
    description:
      "Fundamentals of programming using modern languages, covering variables, control structures, and basic algorithms.",
    createdAt: new Date().toISOString(),
  },
  {
    id: 2,
    code: "IT201",
    name: "Database Management Systems",
    department: "Information Technology",
    description:
      "Concepts of relational databases, SQL queries, normalization, and database design principles.",

    createdAt: new Date().toISOString(),
  },
  {
    id: 3,
    code: "SE301",
    name: "Software Engineering",
    department: "Software Engineering",
    description:
      "Software development lifecycle, design patterns, testing methodologies, and team-based project development.",
    createdAt: new Date().toISOString(),
  },
];
