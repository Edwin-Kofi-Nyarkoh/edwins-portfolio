import BioSection from "@/component/bio";
import ContactSection from "@/component/contactSection";
import IntroSection from "@/component/introSection";
import ServiceSection from "@/component/serviceSection";
import { buttonVariants } from "@/component/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="bg-white pt-24 text-black transition-colors duration-300 dark:bg-neutral-950 dark:text-white">
        <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-6xl items-center gap-10 px-6 py-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-6">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-yellow-700 dark:text-yellow-400">
              Cloud security focused full-stack developer
            </p>
            <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              I build secure web apps and cloud-ready systems.
            </h1>
            <p className="max-w-2xl text-base leading-8 text-neutral-700 dark:text-neutral-300 sm:text-lg">
              I combine full-stack development with a growing cloud security
              practice across AWS IAM, VPC, S3, CloudTrail, Prisma, Prowler
              PostgreSQL, secure authentication, and practical web security
              habits.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className={buttonVariants({ size: "lg", className: "rounded-full" })}
              >
                Contact Me
              </Link>
              <Link
                href="/project"
                className={buttonVariants({
                  variant: "outline",
                  size: "lg",
                  className: "rounded-full",
                })}
              >
                View Projects
              </Link>
            </div>
          </div>

          <div className="relative min-h-[340px] overflow-hidden rounded-lg bg-neutral-100 shadow-2xl dark:bg-neutral-900 sm:min-h-[460px]">
            <Image
              src="/image/mainLandingPage.jpg"
              alt="Picture of myself (Edwin kofi Nyarkoh)"
              fill
              priority
              className="object-cover object-center transition-transform duration-500 ease-out hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </div>
        </div>
      </section>

      <IntroSection />

      <section className="bg-white py-12 text-black dark:bg-neutral-950 dark:text-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6">
          <h2 className="text-2xl font-bold">Featured Services</h2>
          <Link href="/service" className="font-semibold text-yellow-700 hover:underline dark:text-yellow-400">
            Browse services
          </Link>
        </div>
        <ServiceSection limit={3} />
      </section>

      <section className="bg-white py-12 text-black dark:bg-neutral-950 dark:text-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6">
          <h2 className="text-2xl font-bold">Selected Projects</h2>
          <Link href="/project" className="font-semibold text-yellow-700 hover:underline dark:text-yellow-400">
            Browse projects
          </Link>
        </div>
        <BioSection />
      </section>

      <section className="bg-white px-4 pb-12 dark:bg-neutral-950">
        <ContactSection />
      </section>
    </main>
  );
}
