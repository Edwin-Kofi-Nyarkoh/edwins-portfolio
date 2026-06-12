import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // ── SERVICES (max 4, cyber/AWS first) ──────────────────────────────
  await prisma.service.createMany({
    data: [
      {
        title: "Cybersecurity & Ethical Hacking",
        category: "Cybersecurity",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
        content:
          "Penetration testing and security assessments using Kali Linux. I identify vulnerabilities in web applications and networks, perform privilege escalation analysis, and deliver clear security reports — all grounded in ethical hacking principles and real-world tooling.",
      },
      {
        title: "Cloud Infrastructure on AWS",
        category: "Cloud",
        image: "https://images.unsplash.com/photo-1508780709619-79562169bc64",
        content:
          "AWS-powered infrastructure setup for web applications. As a certified AWS Cloud Practitioner, I configure scalable environments, manage S3 storage, set up EC2 instances, and apply IAM best practices — building a solid, secure foundation for your product.",
      },
      {
        title: "Full-Stack Web Development",
        category: "Development",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
        content:
          "End-to-end web applications built with Next.js 15, TypeScript, Node.js, and PostgreSQL. From responsive UI with Tailwind CSS to REST APIs and database design with Prisma — I handle the full product lifecycle including Dockerised deployments.",
      },
      {
        title: "Technical Training & Mentorship",
        category: "Education",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
        content:
          "Structured beginner-friendly programming sessions covering JavaScript, web fundamentals, and developer tooling. As Beginners Club lead at UCC, I design slide decks, run live coding demos, and create assignments that make complex concepts genuinely accessible.",
      },
    ],
  });
  console.log("✅ Services seeded");

  // ── PROJECTS ────────────────────────────────────────────────────────
  await prisma.project.createMany({
    data: [
      {
        title: "TaskFlow — SaaS Task Manager",
        description:
        "A 3-tier SaaS task management app built with Next.js 15, Node.js, PostgreSQL, and Docker. Features authentication, task CRUD, real-time updates with TanStack Query v5, and a fully containerised environment with Docker Compose.",
        image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71",
        link: "https://github.com/Ednold-Company",
      },
      {
        title: "DevBlog Pro — Developer Blog Platform",
        description:
        "A monolithic Next.js 15 blog platform for developers. Supports markdown posts, category filtering, slug-based routing, and an admin dashboard — built with TypeScript, Prisma, PostgreSQL, and Tailwind CSS.",
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
        link: "https://github.com/Ednold-Company",
      },
      {
        title: "IBEMS — Fingerprint Exam Access System",
        description:
          "A biometric-based examination hall access control system for the University of Cape Coast. Uses fingerprint authentication to verify student identity before granting entry, eliminating impersonation in exams.",
        image: "https://images.unsplash.com/photo-1581092334492-16b3d0f5c8d6",
        link: "https://github.com/Ednold-Company",
      },
      {
        title: "Personal Portfolio",
        description:
          "This portfolio — built with Next.js 15, TypeScript, Tailwind CSS, Prisma, and PostgreSQL. Dynamic blog, services and projects sections pulled from a live database, with metadata-optimised pages and cloud deployment.",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
        link: "https://github.com/Ednold-Company",
      },
    ],
  });
  console.log("✅ Projects seeded");

  // ── BLOGS (7) ───────────────────────────────────────────────────────
  await prisma.blog.createMany({
    data: [
      {
        title: "Why Every Developer Should Learn Cloud Security",
        slug: "why-developers-should-learn-cloud-security",
        description:
          "Cloud misconfigurations are now the #1 cause of data breaches. Here's why understanding cloud security makes you a better — and more employable — developer.",
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
        content: `## The Problem Nobody Talks About

Most developers can build an app. Far fewer can secure it in the cloud.

According to IBM's 2023 Cost of a Data Breach report, cloud misconfigurations account for the majority of breaches — and most of them are caused by developers, not hackers.

## What "Cloud Security" Actually Means for a Dev

It is not just firewalls and compliance checklists. As a developer deploying on AWS, cloud security means:

- Using IAM roles with least privilege (not root keys in your .env)
- Keeping S3 buckets private by default
- Encrypting data at rest and in transit
- Understanding what your Lambda or EC2 instance can access

## Where to Start

1. Get the AWS Cloud Practitioner certification — it gives you the vocabulary
2. Study IAM deeply — permissions are everything in AWS
3. Try the free OWASP Top 10 resources
4. Practice on a personal project, not a client's infrastructure

The developer who understands both shipping features and securing them is rare. Be that developer.`,
      },
      {
        title: "var vs let vs const — What Nobody Told You",
        slug: "var-let-const-what-nobody-told-you",
        description:
          "Most tutorials tell you to just use const. But understanding why — and what hoisting and the Temporal Dead Zone actually mean — makes you a sharper JavaScript developer.",
        image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
        content: `## The Quick Answer Everyone Gives

Use \`const\` by default. Use \`let\` when you need to reassign. Never use \`var\`.

That is good advice. But if you do not understand *why*, you will hit confusing bugs and not know how to fix them.

## Hoisting — The Behaviour That Trips Everyone Up

\`\`\`javascript
console.log(name); // undefined — no error!
var name = "Edwin";
\`\`\`

JavaScript moves \`var\` declarations to the top of their scope before running your code. The declaration is hoisted, but not the value.

\`let\` and \`const\` are also hoisted — but they are placed in the **Temporal Dead Zone (TDZ)**, meaning accessing them before their declaration throws a \`ReferenceError\`.

\`\`\`javascript
console.log(age); // ReferenceError!
let age = 25;
\`\`\`

## Block Scope vs Function Scope

\`var\` is function-scoped. \`let\` and \`const\` are block-scoped.

\`\`\`javascript
if (true) {
  var x = 10;  // leaks out of the block
  let y = 20;  // stays inside
}
console.log(x); // 10
console.log(y); // ReferenceError
\`\`\`

## The Rule

Default to \`const\`. Reach for \`let\` only when reassignment is genuinely needed. Treat \`var\` as a historical artefact.`,
      },
      {
        title: "Docker for Developers — From Zero to Running Container",
        slug: "docker-for-developers-zero-to-container",
        description:
          "If your app works on your machine but breaks in production, Docker is the fix. Here is a practical intro to containers, images, and Docker Compose for Next.js developers.",
        image: "https://images.unsplash.com/photo-1605745341112-85968b19335b",
        content: `## Why Docker Exists

"It works on my machine" is a meme because it is painfully real. Docker solves this by packaging your app and everything it needs — Node version, dependencies, environment — into a single container that runs identically everywhere.

## Key Concepts in 60 Seconds

- **Image** — a blueprint for your container (like a class)
- **Container** — a running instance of an image (like an object)
- **Dockerfile** — instructions for building your image
- **Docker Compose** — runs multiple containers together (app + database)

## A Basic Next.js Dockerfile

\`\`\`dockerfile
FROM node:20-alpine AS base
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM base AS runner
EXPOSE 3000
CMD ["npm", "start"]
\`\`\`

## Docker Compose with PostgreSQL

\`\`\`yaml
services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      DATABASE_URL: postgresql://user:password@db:5432/mydb
    depends_on:
      - db
  db:
    image: postgres:15
    environment:
      POSTGRES_USER: user
      POSTGRES_PASSWORD: password
      POSTGRES_DB: mydb
\`\`\`

Run it with \`docker compose up\` and your full stack is live locally in seconds.`,
      },
      {
        title: "AWS Cloud Practitioner — How I Passed and What I Learned",
        slug: "aws-cloud-practitioner-how-i-passed",
        description:
          "My honest account of preparing for and passing the AWS Certified Cloud Practitioner exam as a student — what resources I used, what surprised me, and whether it was worth it.",
        image: "https://images.unsplash.com/photo-1549924231-f129b911e442",
        content: `## Why I Went for It

As someone building toward cloud cybersecurity, I knew I needed to understand the AWS ecosystem before specialising in securing it. The Cloud Practitioner is the entry point — it covers the big picture without going too deep on any one service.

## Resources I Used (All Free)

- **Andrew Brown's freeCodeCamp AWS course** on YouTube — 14 hours, thorough, free
- **Tutorials Dojo practice exams** — closest to the real exam style
- **AWS Free Tier** — I spun up actual services to understand them hands-on

## What the Exam Actually Tests

Forget memorising every service. The exam tests whether you understand:

- The **shared responsibility model** (what AWS handles vs what you handle)
- Core service categories: Compute, Storage, Database, Networking, Security
- Pricing models: On-Demand, Reserved, Spot instances
- The **Well-Architected Framework** — 6 pillars

## What Surprised Me

IAM is everywhere. Almost every question touches on permissions, roles, or policies in some way. Study IAM deeply — it is not optional.

## Was It Worth It?

Yes. Not because of the certificate itself, but because the preparation gave me a solid mental model of how cloud infrastructure works. That foundation makes everything else — Security+, Solutions Architect, hands-on projects — easier to learn.`,
      },
      {
        title: "Understanding Arrays in JavaScript — A Complete Guide",
        slug: "understanding-arrays-in-javascript",
        description:
          "Arrays are the most-used data structure in JavaScript. This guide covers everything from basics to the powerful map, filter, and reduce methods with real examples.",
        image: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f",
        content: `## What Is an Array?

An array is an ordered list of values stored in a single variable.

\`\`\`javascript
const fruits = ["apple", "banana", "cherry"];
console.log(fruits[0]); // apple
console.log(fruits.length); // 3
\`\`\`

## Adding and Removing Items

\`\`\`javascript
fruits.push("mango");    // add to end
fruits.pop();            // remove from end
fruits.unshift("kiwi");  // add to start
fruits.shift();          // remove from start
\`\`\`

## The Big Three Methods

### map — transform every item

\`\`\`javascript
const numbers = [1, 2, 3];
const doubled = numbers.map(n => n * 2);
// [2, 4, 6]
\`\`\`

### filter — keep items matching a condition

\`\`\`javascript
const evens = numbers.filter(n => n % 2 === 0);
// [2]
\`\`\`

### reduce — collapse the array to one value

\`\`\`javascript
const total = numbers.reduce((sum, n) => sum + n, 0);
// 6
\`\`\`

## Array of Objects — The Real-World Pattern

\`\`\`javascript
const students = [
  { name: "Alice", score: 85 },
  { name: "Bob",   score: 72 },
];

const topStudents = students
  .filter(s => s.score >= 80)
  .map(s => s.name);
// ["Alice"]
\`\`\`

Master arrays and you have mastered the core of JavaScript data handling.`,
      },
      {
        title: "Linux for Hackers — The Commands You Actually Need",
        slug: "linux-for-hackers-commands-you-need",
        description:
          "Kali Linux feels overwhelming at first. Here are the terminal commands and concepts that actually matter when you are starting out in ethical hacking and penetration testing.",
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
        content: `## Why Linux for Security?

Almost every serious security tool — Nmap, Metasploit, Burp Suite, Wireshark — runs natively on Linux. Kali Linux bundles them all. If you want to do ethical hacking, you need to be comfortable in a Linux terminal.

## The Commands That Matter Most

### Navigation
\`\`\`bash
pwd          # where am I?
ls -la       # list all files including hidden
cd /etc      # change directory
find / -name "*.conf" 2>/dev/null  # search for files
\`\`\`

### Permissions (critical for privilege escalation)
\`\`\`bash
ls -la         # see file permissions
chmod 755 file # change permissions
sudo -l        # what can I run as root?
id             # who am I?
\`\`\`

### Networking
\`\`\`bash
ifconfig       # network interfaces
netstat -tuln  # open ports
nmap -sV 192.168.1.1  # scan a host
\`\`\`

### Process Management
\`\`\`bash
ps aux         # all running processes
kill -9 PID    # force kill a process
\`\`\`

## The Learning Mindset

Do not try to memorise everything. Instead, get comfortable with:

1. Knowing which tool to reach for
2. Reading man pages (\`man nmap\`)
3. Piping commands together (\`cat file | grep "password"\`)

The terminal is not scary — it is just a different way of talking to your computer. The more you use it, the faster you get.`,
      },
      {
        title: "From Student to Cloud Security Engineer — My Roadmap",
        slug: "student-to-cloud-security-engineer-roadmap",
        description:
          "A honest, practical roadmap for going from a computing student to a cloud cybersecurity professional — the certifications, skills, and projects that actually move the needle.",
        image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
        content: `## Where I Am Starting From

I am a Computer Science student at the University of Cape Coast, Ghana. I have my AWS Cloud Practitioner cert, I am comfortable in Linux and Kali, I can build full-stack apps with Next.js and Docker, and I am working toward CompTIA Security+ and AWS Solutions Architect.

This is the roadmap I am following — not a generic template, but what makes sense given where I am.

## Phase 1 — Foundation (Now)

- ✅ AWS Cloud Practitioner
- ✅ Linux fundamentals + Kali Linux basics
- ✅ Full-stack development (Next.js, Docker, PostgreSQL)
- 🔄 CompTIA Security+ — understanding core security concepts
- 🔄 Python scripting for automation and tooling

## Phase 2 — Specialisation (Next 6–12 months)

- AWS Solutions Architect Associate (SAA-C03)
- Networking deep-dive — TCP/IP, DNS, VPNs, firewalls
- Web application security — OWASP Top 10, Burp Suite
- Cloud security tools — AWS GuardDuty, Security Hub, CloudTrail

## Phase 3 — Advanced (12–24 months)

- AWS Security Specialty or Certified Ethical Hacker (CEH)
- Bug bounty participation (HackerOne, Bugcrowd)
- Build a home lab — vulnerable VMs, CTF challenges
- Contribute to open-source security tooling

## The Honest Truth

Certifications open doors but projects keep them open. Every cert I pursue, I pair with a real project that demonstrates the skill — not just a badge on LinkedIn.

If you are on a similar path, start with Security+ and build something. The combination of credentials and demonstrable work is what gets you hired.`,
      },
    ],
  });
  console.log("✅ Blogs seeded");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });