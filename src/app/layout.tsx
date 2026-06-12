import Footer from "@/component/footer";
import Navbar from "@/component/navbar";
import Providers from "@/component/providers";
import MaintenanceAlert from "@/component/MaintenanceAlert";
import "./globals.css";

export const metadata = {
  title: "Edwin Nyarkoh | Portfolio",
  description: "Full-stack developer specializing in cloud and cybersecurity",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <Navbar />
          <div className="min-h-screen bg-white text-black transition-colors duration-300 dark:bg-neutral-950 dark:text-white">
            <MaintenanceAlert />
            {children}
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
