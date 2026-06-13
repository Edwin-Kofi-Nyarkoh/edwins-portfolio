import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // 🔥 CLEAR TABLES FIRST (prevents duplicates)
  await prisma.blog.deleteMany();
  await prisma.project.deleteMany();
  await prisma.service.deleteMany();

  // ── SERVICES ──────────────────────────────
  await prisma.service.createMany({
    data: [
      {
        title: "Cybersecurity & Ethical Hacking",
        category: "Cybersecurity",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
        content:
          "Penetration testing and security assessments using Kali Linux...",
      },
      {
        title: "Cloud Infrastructure on AWS",
        category: "Cloud",
        image: "https://images.unsplash.com/photo-1508780709619-79562169bc64",
        content:
          "AWS-powered infrastructure setup for web applications...",
      },
      {
        title: "Full-Stack Web Development",
        category: "Development",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
        content:
          "End-to-end web applications built with Next.js...",
      },
      {
        title: "Technical Training & Mentorship",
        category: "Education",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
        content:
          "Structured beginner-friendly programming sessions...",
      },
    ],
  });

  console.log("✅ Services seeded");

  // ── PROJECTS ──────────────────────────────
  await prisma.project.createMany({
    data: [
      {
        title: "TaskFlow — SaaS Task Manager",
        description: "A 3-tier SaaS task management app...",
        image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71",
        link: "https://github.com/Ednold-Company",
      },
      {
        title: "DevBlog Pro — Developer Blog Platform",
        description: "A monolithic Next.js 15 blog platform...",
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
        link: "https://github.com/Ednold-Company",
      },
      {
        title: "IBEMS — Fingerprint Exam Access System",
        description: "A biometric-based examination hall system...",
        image: "https://images.unsplash.com/photo-1581092334492-16b3d0f5c8d6",
        link: "https://github.com/Ednold-Company",
      },
      {
        title: "Personal Portfolio",
        description: "This portfolio built with Next.js...",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
        link: "https://github.com/Ednold-Company",
      },
    ],
  });

  console.log("✅ Projects seeded");

  // ── BLOGS ──────────────────────────────
  await prisma.blog.createMany({
    data: [
      {
        title: "Why Every Developer Should Learn Cloud Security",
        slug: "why-developers-should-learn-cloud-security",
        description: "Cloud misconfigurations are now the #1 cause...",
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
        content: "Full content here...",
      },
      {
        title: "var vs let vs const — What Nobody Told You",
        slug: "var-let-const-what-nobody-told-you",
        description: "Most tutorials tell you to just use const...",
        image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
        content: "Full content here...",
      },
      {
        title: "Docker for Developers — From Zero to Running Container",
        slug: "docker-for-developers-zero-to-container",
        description: "If your app works locally but breaks...",
        image: "https://images.unsplash.com/photo-1605745341112-85968b19335b",
        content: "Full content here...",
      },
      {
        title: "AWS Cloud Practitioner — How I Passed",
        slug: "aws-cloud-practitioner-how-i-passed",
        description: "My honest account of passing AWS CCP...",
        image: "https://images.unsplash.com/photo-1549924231-f129b911e442",
        content: "Full content here...",
      },
      {
        title: "Understanding Arrays in JavaScript",
        slug: "understanding-arrays-in-javascript",
        description: "Arrays are the most-used data structure...",
        image: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f",
        content: "Full content here...",
      },
      {
        title: "Linux for Hackers — The Commands You Need",
        slug: "linux-for-hackers-commands-you-need",
        description: "Kali Linux feels overwhelming at first...",
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
        content: "Full content here...",
      },
      {
        title: "From Student to Cloud Security Engineer",
        slug: "student-to-cloud-security-engineer-roadmap",
        description: "A practical roadmap into cloud security...",
        image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
        content: "Full content here...",
      },
    ],
    skipDuplicates: true, // 🔥 prevents slug crash
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