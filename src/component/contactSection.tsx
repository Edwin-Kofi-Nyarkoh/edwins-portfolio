"use client";

import { FormEvent, useState } from "react";

const ContactSection = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  const submitForm = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ name, email, subject, message }),
      });

      if (response.ok) {
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
        setStatus("Message sent successfully.");
      } else {
        setStatus("Message could not be sent. Please try again.");
      }
    } catch {
      setStatus("Message could not be sent. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="mx-auto max-w-3xl rounded-lg border border-black/10 bg-yellow-50 px-6 py-12 text-black shadow-sm transition-colors duration-300 dark:border-white/10 dark:bg-neutral-900 dark:text-white">
      <h2 className="mb-8 text-center text-2xl font-bold">Contact Me</h2>

      <form onSubmit={submitForm} className="space-y-6">
        <div>
          <label className="mb-1 block text-sm font-semibold" htmlFor="name">
            Your Name
          </label>
          <input
            id="name"
            type="text"
            required
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-md border border-black/10 bg-white px-4 py-3 outline-none transition focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/30 dark:border-white/10 dark:bg-neutral-950"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-semibold" htmlFor="email">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            required
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-md border border-black/10 bg-white px-4 py-3 outline-none transition focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/30 dark:border-white/10 dark:bg-neutral-950"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-semibold" htmlFor="subject">
            Subject
          </label>
          <input
            id="subject"
            type="text"
            required
            placeholder="Enter subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full rounded-md border border-black/10 bg-white px-4 py-3 outline-none transition focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/30 dark:border-white/10 dark:bg-neutral-950"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-semibold" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            required
            placeholder="Enter your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full resize-none rounded-md border border-black/10 bg-white px-4 py-3 outline-none transition focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/30 dark:border-white/10 dark:bg-neutral-950"
          />
        </div>

        {status && (
          <p className="text-center text-sm font-semibold text-neutral-700 dark:text-neutral-300">
            {status}
          </p>
        )}

        <div className="text-center">
          <button
            type="submit"
            disabled={loading}
            className="rounded-full bg-yellow-500 px-6 py-3 font-semibold text-black transition hover:bg-yellow-400 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactSection;
