import ServiceSection from "@/component/serviceSection";

export default function Service() {
  return (
    <main className="bg-white px-4 py-24 text-black dark:bg-neutral-950 dark:text-white">
      <h1 className="mb-8 text-center text-3xl font-bold">All My Services</h1>
      <ServiceSection />
    </main>
  );
}
