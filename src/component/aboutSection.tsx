import { Badge } from "@/component/ui/badge";
import { Card, CardContent } from "@/component/ui/card";
import Image from "next/image";

const skills = [
  {
    title: "Cloud & Security",
    items: "AWS IAM, VPC, EC2, S3, CloudTrail, least privilege, security group hardening",
  },
  {
    title: "Security Tooling",
    items: "Kali Linux, Nmap, privilege escalation, network reconnaissance, Prowler",
  },
  {
    title: "Web Security",
    items: "OWASP Top 10, JWT auth, SQL injection and XSS prevention, bcrypt, validation",
  },
  {
    title: "Full-Stack Dev",
    items: "JavaScript, TypeScript, React, React Native, Next.js 15, Node.js, Python",
  },
  {
    title: "Databases & DevOps",
    items: "PostgreSQL, Prisma ORM, REST APIs, TanStack Query v5, Docker, Git, Bash, Linux CLI",
  },
];

const projects = [
  {
    title: "Ticketing Management System | QRGate",
    date: "July 2025",
    points: [
      "Engineered a PostgreSQL and Prisma ORM relational schema with integrity constraints and optimized query patterns.",
      "Implemented secure session handling and input validation to reduce common injection risks.",
      "Collaborated in a team of 3 using Git and Agile workflows, improving the UI through feedback from 10+ peer testers.",
    ],
  },
  {
    title: "Campus Service Marketplace | TaskLink Africa",
    date: "September 2024",
    points: [
      "Built a responsive Next.js platform connecting students with local service providers.",
      "Iterated on UI and UX based on feedback from 10+ peers.",
      "Deployed on Vercel with environment-variable separation for safer API key handling.",
    ],
  },
  {
    title: "Secure Multi-Tier AWS Cloud Infrastructure",
    date: "June 2026",
    points: [
      "Designed a multi-tier AWS architecture with public and private subnets in a custom VPC.",
      "Restricted SSH access through a bastion host and enforced least-privilege IAM roles.",
      "Configured encrypted S3 asset storage, blocked public access, and limited bucket access to an EC2 IAM role.",
      "Enabled multi-region CloudTrail logging to support auditing and unauthorized access detection.",
    ],
  },
];

const labs = [
  "Linux Basics for Hackers",
  "Privilege escalation, wireless hacking fundamentals, and Bash/Python security scripting on Kali Linux",
  "Nmap host discovery, OS detection, port scanning, and Nmap Scripting Engine usage",
  "OWASP Top 10 labs on HackTheBox covering access control, injection, SSRF, and IDOR",
  "Cloud security auditing with Prowler and Scout Suite against AWS Free Tier environments",
  "Python scripting for security tools such as port scanners and log parsers",
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="bg-white px-6 py-16 text-black transition-colors duration-300 dark:bg-neutral-950 dark:text-white"
    >
      <div className="mx-auto max-w-6xl space-y-10">
        <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative min-h-[340px] overflow-hidden rounded-lg bg-neutral-100 shadow-lg dark:bg-neutral-900">
            <Image
              src="/image/landingImage.jpg"
              alt="Developer workspace"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </div>

          <div className="space-y-5">
            <Badge>Cloud Security Engineer in training</Badge>
            <h1 className="text-4xl font-bold leading-tight">
              Edwin Kofi Nyarkoh
            </h1>
            <p className="leading-8 text-neutral-700 dark:text-neutral-300">
              Level 300 Information Technology student at the University of Cape
              Coast with hands-on full-stack development experience and an AWS
              Certified Cloud Practitioner credential. I am passionate about
              securing cloud infrastructure and building a career as a Cloud
              Security Engineer.
            </p>
            <p className="leading-8 text-neutral-700 dark:text-neutral-300">
              I bring practical knowledge of IAM, VPC, S3, and cloud-native
              security principles, supported by Linux/Kali Linux proficiency,
              network reconnaissance skills, and a builder&apos;s mindset from
              shipping full-stack products.
            </p>
            <div className="flex flex-wrap gap-2 text-sm text-neutral-700 dark:text-neutral-300">
              <span>Assin Foso, Ghana</span>
              <span>|</span>
              <a href="tel:+233598346928" className="hover:text-yellow-700 dark:hover:text-yellow-400">
                +233 59 834 6928
              </a>
              <span>|</span>
              <a href="mailto:edwin.kofi.nyarkoh@gmail.com" className="hover:text-yellow-700 dark:hover:text-yellow-400">
                edwin.kofi.nyarkoh@gmail.com
              </a>
            </div>
            <div className="flex flex-wrap gap-3 text-sm font-semibold">
              <a
                href="https://linkedin.com/in/edwin-nyarkoh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-700 hover:underline dark:text-yellow-400"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/Edwin-Kofi-Nyarkoh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-700 hover:underline dark:text-yellow-400"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Card className="bg-yellow-50 dark:bg-neutral-900">
            <CardContent>
              <h2 className="mb-3 text-xl font-bold">Certifications</h2>
              <ul className="space-y-3 text-sm leading-6 text-neutral-700 dark:text-neutral-300">
                <li>AWS Certified Cloud Practitioner (CLF-C02), Amalitech, 2026</li>
                <li>Google Cybersecurity, Coursera, In Progress</li>
                <li>AWS Solutions Architect Associate (SAA-C03), Planned</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-yellow-50 dark:bg-neutral-900">
            <CardContent>
              <h2 className="mb-3 text-xl font-bold">Education</h2>
              <ul className="space-y-3 text-sm leading-6 text-neutral-700 dark:text-neutral-300">
                <li>B.Sc. Information Technology, University of Cape Coast, Jan 2024 to Present</li>
                <li>WASSCE Business, Apam Senior High School, September 2022</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-yellow-50 dark:bg-neutral-900">
            <CardContent>
              <h2 className="mb-3 text-xl font-bold">Leadership</h2>
              <ul className="space-y-3 text-sm leading-6 text-neutral-700 dark:text-neutral-300">
                <li>Amalitech Coding Club Lead at UCC</li>
                <li>Treasurer, New Apostolic Church UCC Campus Congregation, 2025/2026</li>
                <li>Assistant Treasurer, New Apostolic Church UCC Campus Congregation, 2024/2025</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <section>
          <h2 className="mb-5 text-2xl font-bold">Technical Skills</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {skills.map((skill) => (
              <Card key={skill.title}>
                <CardContent>
                  <h3 className="mb-2 font-bold">{skill.title}</h3>
                  <p className="text-sm leading-6 text-neutral-700 dark:text-neutral-300">
                    {skill.items}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-5 text-2xl font-bold">Projects & Experience</h2>
          <div className="space-y-4">
            {projects.map((project) => (
              <Card key={project.title}>
                <CardContent>
                  <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="text-lg font-bold">{project.title}</h3>
                    <span className="text-sm font-semibold text-yellow-700 dark:text-yellow-400">
                      {project.date}
                    </span>
                  </div>
                  <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-neutral-700 dark:text-neutral-300">
                    {project.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-5 text-2xl font-bold">Security Labs & Learning</h2>
          <Card>
            <CardContent>
              <ul className="grid list-disc gap-3 pl-5 text-sm leading-6 text-neutral-700 dark:text-neutral-300 md:grid-cols-2">
                {labs.map((lab) => (
                  <li key={lab}>{lab}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>
      </div>
    </section>
  );
}
