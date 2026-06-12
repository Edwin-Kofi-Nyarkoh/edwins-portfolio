import Image from "next/image";

export default function IntroSection() {
  return (
    <section className="bg-neutral-50 py-16 text-black transition-colors duration-300 dark:bg-neutral-900 dark:text-white">
      <div className="mx-auto grid max-w-5xl items-center gap-8 px-6 lg:grid-cols-2">
  
  {/* IMAGE */}
  <div className="order-2 lg:order-1 group relative h-[350px] w-full overflow-hidden rounded-lg bg-neutral-100 dark:bg-neutral-800">
    <Image
      src="/image/mainAboutme.jpg"
      alt="Portrait of the developer"
      fill
      className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
      sizes="(max-width: 1024px) 100vw, 50vw"
    />
  </div>

  {/* TEXT */}
  <div className="order-1 lg:order-2">
    <h2 className="mb-4 text-3xl font-bold">Who I Am</h2>
    <p className="leading-8 text-neutral-700 dark:text-neutral-300">
      I am <i>Edwin Kofi Nyarkoh,</i> a Level 300 Information Technology student at the University of
      Cape Coast and an AWS Certified Cloud Practitioner. I build
      full-stack applications while sharpening cloud security skills
      across IAM, VPC design, S3 hardening, CloudTrail auditing, Linux,
      Kali Linux, and network reconnaissance.
    </p>
  </div>

</div>
    </section>
  );
}
