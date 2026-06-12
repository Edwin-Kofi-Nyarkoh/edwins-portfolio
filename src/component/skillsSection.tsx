"use client";

import { Card, CardContent } from "@/component/ui/card";
import { FaAws, FaGithub, FaReact } from "react-icons/fa";
import { SiDocker, SiJavascript, SiPostgresql } from "react-icons/si";

const groups = [
  {
    title: "Cloud & Security",
    icon: <FaAws className="text-orange-500" size={28} />,
    body: "AWS IAM, VPC, EC2, S3, CloudTrail, cloud security fundamentals, IAM least privilege, and security group hardening.",
  },
  {
    title: "Security Tooling",
    icon: <SiDocker className="text-blue-500" size={26} />,
    body: "Kali Linux, Nmap, privilege escalation practice, network reconnaissance, Prowler, Linux CLI, and AWS Free Tier labs.",
  },
  {
    title: "Web Security",
    icon: <SiJavascript className="text-yellow-500" size={26} />,
    body: "OWASP Top 10, JWT authentication, SQL injection and XSS prevention, bcrypt password hashing, and input validation.",
  },
  {
    title: "Full-Stack Development",
    icon: <FaReact className="text-blue-500" size={28} />,
    body: "React, React Native, Next.js 15, JavaScript, TypeScript, Node.js, Python, REST APIs, and responsive UI development.",
  },
  {
    title: "Databases & ORM",
    icon: <SiPostgresql className="text-sky-700" size={28} />,
    body: "PostgreSQL, Prisma ORM, relational schema design, query patterns, API-backed data flows, and TanStack Query v5 caching.",
  },
  {
    title: "DevOps & Collaboration",
    icon: <FaGithub className="text-neutral-900 dark:text-white" size={28} />,
    body: "Docker, Git, GitHub, Bash scripting, Agile workflow, Vercel deployments, and environment-variable separation.",
  },
];

export default function SkillsSection() {
  return (
    <main className="min-h-screen bg-white px-6 pb-12 pt-32 text-black dark:bg-neutral-950 dark:text-white">
      <h1 className="mb-4 text-center text-4xl font-bold">Skills & Tools</h1>
      <p className="mx-auto mb-12 max-w-3xl text-center text-lg leading-8 text-neutral-700 dark:text-neutral-300">
        My current focus is the overlap between secure cloud infrastructure,
        practical cybersecurity labs, and full-stack product development.
      </p>

      <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
        {groups.map((group) => (
          <Card key={group.title} className="bg-yellow-50 dark:bg-neutral-900">
            <CardContent>
              <div className="mb-3 flex items-center gap-4">
                {group.icon}
                <h2 className="text-xl font-bold">{group.title}</h2>
              </div>
              <p className="leading-7 text-neutral-700 dark:text-neutral-300">
                {group.body}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
