import Link from "next/link";
import ProjectSection from "./projectSection";

export default function BioSection() {
  return (
    <section className="mx-auto max-w-5xl bg-white py-6 text-black transition-colors duration-300 dark:bg-neutral-950 dark:text-white">
      <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
        <ProjectSection limit={3} />
        <aside className="px-6 py-8">
          <Link
            href="/skill"
            className="text-2xl font-bold underline decoration-yellow-500 underline-offset-4 hover:text-yellow-700 dark:hover:text-yellow-400"
          >
            Skills & Experience
          </Link>
          <ul className="mt-4 space-y-2 text-neutral-700 dark:text-neutral-300">
            <li>AWS IAM, VPC, EC2, S3, CloudTrail</li>
            <li>Cloud security fundamentals</li>
            <li>Kali Linux, Nmap, reconnaissance</li>
            <li>OWASP Top 10 and secure auth</li>
            <li>React, Next.js 15, TypeScript</li>
            <li>PostgreSQL, Prisma, REST APIs</li>
          </ul>

          <h3 className="mt-8 font-bold">Download My CV</h3>
          <a
            href="/Edwin_Kofi_Nyarkoh_CV.pdf"
            download
            className="mt-2 inline-block font-semibold text-yellow-700 underline dark:text-yellow-400"
          >
            Download CV
          </a>
        </aside>
      </div>
    </section>
  );
}
