'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMsg('');

    const res = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });

    if (res?.error) {
      if (res.error === 'Account already exists. Please log in with email and password.') {
        setErrorMsg('Account already exists. Please log in with email and password.');
      } else {
        setErrorMsg('Invalid email or password');
      }
    } else {
      router.push('/');
    }
  };

  const handleOAuth = async (provider: 'google' | 'github') => {
    await signIn(provider, { callbackUrl: '/', redirect: true });
  };

  return (
    <section className='flex justify-center items-center'>
    <div className="max-w-md mx-auto mt-24 bg-white/90 dark:bg-gray-900 p-8 rounded-lg shadow-md text-black dark:text-white transition-all duration-500">
      <h1 className="text-3xl font-bold mb-6 text-center">Sign In</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Email:</label>
          <input
            type="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="w-full px-4 py-2 border border-gray-300 dark:border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-zinc-800"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Password:</label>
          <input
            type="password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            className="w-full px-4 py-2 border border-gray-300 dark:border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-zinc-800"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-md transition-colors"
        >
          Sign In
        </button>
      </form>

      <div className="flex justify-between items-center mt-4 text-sm">
        <Link href="/signup" className="text-blue-600 hover:underline">Sign Up</Link>
        <Link href="/forgotpassword" className="text-blue-600 hover:underline">Forgot password?</Link>
      </div>

      {errorMsg && (
        <p className="mt-4 text-red-600 font-medium text-center">{errorMsg}</p>
      )}

      <hr className="my-6 border-gray-300 dark:border-zinc-700" />

      <div className="space-y-2">
        <button
          onClick={() => handleOAuth('google')}
          className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-md"
        >
          Sign in with Google
        </button>
        <button
          onClick={() => handleOAuth('github')}
          className="w-full bg-gray-800 hover:bg-gray-900 text-white py-2 rounded-md"
        >
          Sign in with GitHub
        </button>
      </div>
    </div>
    </section>
  );
}
