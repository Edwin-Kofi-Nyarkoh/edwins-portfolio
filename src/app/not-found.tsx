import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-blue-600">404</h1>
        <p className="text-xl mt-4 text-gray-700">
          Sorry, the page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
