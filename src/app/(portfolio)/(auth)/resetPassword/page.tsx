'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function ResetPassword() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [token, setToken] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const tokenFromUrl = searchParams.get('token');
    if (tokenFromUrl) {
      setToken(tokenFromUrl);
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage('Passwords do not match');
      return;
    }

    try {
      const res = await fetch('/api/auth/resetPassword', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || 'Failed to reset password');
      }

      setMessage('Password successfully reset. Redirecting to login...');
      setTimeout(() => router.push('/login'), 2000);
    } catch {
      setMessage('Something went wrong.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 bg-white/90 dark:bg-zinc-900 p-8 rounded-lg shadow-md text-black dark:text-white transition-all duration-500">
      <h1 className="text-3xl font-bold mb-6 text-center">Reset Your Password</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="password"
          placeholder="New Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full px-4 py-2 border border-gray-300 dark:border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-zinc-800"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          className="w-full px-4 py-2 border border-gray-300 dark:border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-zinc-800"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition-colors"
        >
          Reset Password
        </button>
        {message && (
          <p className="mt-4 text-center text-sm text-red-600 dark:text-red-400">{message}</p>
        )}
      </form>
    </div>
  );
}
