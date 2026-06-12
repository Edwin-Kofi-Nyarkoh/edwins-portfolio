import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const image = "https://live.staticflickr.com/65535/54308884010_e9968d4f2a_n.jpg";

const services = [
  {
    title: "Cloud Security Readiness",
    content:
      "AWS-focused security reviews covering IAM least privilege, VPC design, security group hardening, S3 public access controls, CloudTrail logging, and practical remediation steps.",
    category: "Cloud Security",
    slug: "cloud-security-readiness",
    image,
  },
  {
    title: "Secure Full-Stack Development",
    content:
      "Full-stack applications built with Next.js, PostgreSQL, Prisma, secure authentication, input validation, bcrypt password hashing, and clean API boundaries.",
    category: "Development",
    slug: "secure-full-stack-development",
    image,
  },
  {
    title: "Web Security Review",
    content:
      "Practical checks for OWASP Top 10 risks including broken access control, injection, XSS, insecure direct object references, and weak validation patterns.",
    category: "Web Security",
    slug: "web-security-review",
    image,
  },
  {
    title: "AWS Lab Architecture",
    content:
      "Design and documentation for learning-focused AWS environments using VPCs, public and private subnets, EC2, S3, IAM roles, and audit logging.",
    category: "AWS",
    slug: "aws-lab-architecture",
    image,
  },
  {
    title: "Technical Mentorship",
    content:
      "Beginner-friendly JavaScript, React, Next.js, Git, Linux CLI, and cloud fundamentals coaching shaped by hands-on club leadership experience.",
    category: "Mentorship",
    slug: "technical-mentorship",
    image,
  },
];

const projects = [
  {
    description:
      "Ticketing Management System | QRGate: PostgreSQL and Prisma schema design, secure session handling, validation, and team-based Agile delivery.",
    link: "https://example.com/qrgate",
    image,
  },
  {
    description:
      "Campus Service Marketplace | TaskLink Africa: a responsive Next.js platform connecting students with local service providers and deployed with secure environment separation.",
    link: "https://example.com/tasklink-africa",
    image,
  },
  {
    description:
      "Secure Multi-Tier AWS Cloud Infrastructure: custom VPC, public/private subnets, bastion access, least-privilege IAM, encrypted S3 storage, and CloudTrail auditing.",
    link: "https://github.com/Edwin-Kofi-Nyarkoh",
    image,
  },
];

const blogs = [
  {
    title: "My Path Toward Cloud Security",
    image,
    description:
      "How full-stack development, AWS fundamentals, and cybersecurity labs are shaping my cloud security journey.",
    slug: "my-path-toward-cloud-security",
    content:
      "My path into cloud security combines building real web applications with learning how infrastructure can fail when identity, networking, storage, and logging are not designed carefully. I am focused on AWS, secure application patterns, and practical lab work that turns theory into usable skill.",
  },
  {
    title: "Building Secure Next.js Apps",
    image,
    description:
      "Security habits I use when working with Next.js, Prisma, PostgreSQL, auth, and user-submitted data.",
    slug: "building-secure-nextjs-apps",
    content:
      "Secure application development starts with simple habits: validate inputs, hash passwords with bcrypt, keep secrets out of source control, use least privilege for database access, and design API routes with clear authorization checks. Those choices make apps easier to maintain and harder to abuse.",
  },
  {
    title: "AWS Labs That Teach Real Security Lessons",
    image,
    description:
      "What VPCs, IAM, S3 hardening, CloudTrail, Nmap, and auditing tools teach about practical defense.",
    slug: "aws-labs-that-teach-real-security-lessons",
    content:
      "Hands-on labs make cloud security concrete. Building a VPC, isolating public and private subnets, limiting SSH access, hardening S3, and enabling CloudTrail all show how small configuration choices can create or reduce risk.",
  },
];

async function main() {
  for (const service of services) {
    await prisma.service.upsert({
      where: { slug: service.slug },
      update: service,
      create: service,
    });
  }

  await prisma.project.deleteMany({});
  await prisma.project.createMany({ data: projects });

  for (const blog of blogs) {
    await prisma.blog.upsert({
      where: { slug: blog.slug },
      update: blog,
      create: blog,
    });
  }
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
