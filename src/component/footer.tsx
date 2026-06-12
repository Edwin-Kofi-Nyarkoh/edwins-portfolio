'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaYoutube, FaInstagram, FaTiktok, FaEnvelope } from "react-icons/fa";

const Footer: React.FC = () => {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  const linkClass = (href: string) =>
    `transition-colors ${
      isActive(href)
        ? "text-blue-600 dark:text-blue-400 font-semibold underline"
        : "text-yellow-600 hover:text-white dark:hover:text-white"
    }`;

  return (
    <footer className="bg-white/90 dark:bg-gray-950 text-black dark:text-white py-8 shadow-lg transition-all duration-500">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8 px-6">
        
        {/* Brand */}
        <div>
          <h3 className="text-black dark:text-white font-bold mb-4 text-3xl">MR. SOFT</h3>
        </div>

        {/* Navigation Links */}
        <div>
          <ul className="space-y-2">
            <li><Link href="/" className={linkClass("/")}>Home</Link></li>
            <li><Link href="/about" className={linkClass("/about")}>About</Link></li>
            <li><Link href="/service" className={linkClass("/service")}>Services</Link></li>
            <li><Link href="/project" className={linkClass("/project")}>Projects</Link></li>
            <li><Link href="/skill" className={linkClass("/skill")}>Skills & services</Link></li>
            <li><Link href="/blog" className={linkClass("/blog")}>Blog</Link></li>
            <li><Link href="/kits" className={linkClass("/kits")}>Search</Link></li>
            <li><Link href="/memberships" className={linkClass("/memberships")}>Login</Link></li>
            <li><Link href="/contact" className={linkClass("/contact")}>Contact Me</Link></li>
          </ul>
        </div>

        {/* Legal Links */}
        <div>
          <ul className="space-y-2">
            <li><Link href="/skill" className={linkClass("/skill")}>Skills & services</Link></li>
            <li><Link href="/terms" className={linkClass("/terms")}>Terms of use</Link></li>
            <li><Link href="/privacy" className={linkClass("/privacy")}>Privacy policy</Link></li>
            <li><Link href="/youtube-terms" className={linkClass("/youtube-terms")}>YouTube Terms of Service</Link></li>
          </ul>
        </div>

        {/* Social Icons */}
        <div className="flex lg:justify-end lg:col-span-2 gap-4 text-yellow-600">
          <FaYoutube size={28} className="hover:text-white transition-colors" />
          <FaInstagram size={28} className="hover:text-white transition-colors" />
          <FaTiktok size={28} className="hover:text-white transition-colors" />
          <a
            href="mailto:edwin.kofi.nyarkoh@gmail.com"
            title="Send Email"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaEnvelope size={28} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
