'use client';

import { useState } from 'react';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setError('Please provide an email address.');
      return;
    }

    setLoading(true);
    setError('');
    setMessage('');

    try {
      const response = await fetch('/api/auth/forgotpassword', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.status === 200) {
        setMessage(data.message);
      } else {
        setError(data.message || 'Something went wrong.');
      }
    } catch {
      setError('Error connecting to the server. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 bg-white/90 dark:bg-zinc-900 p-8 rounded-lg shadow-md text-black dark:text-white transition-all duration-500">
      <h1 className="text-3xl font-bold mb-6 text-center">Forgot Password</h1>

      {error && <p className="mb-4 text-center text-red-600 dark:text-red-400">{error}</p>}
      {message && <p className="mb-4 text-center text-green-600 dark:text-green-400">{message}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block mb-1 font-medium">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 dark:border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-zinc-800"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition-colors disabled:opacity-60"
        >
          {loading ? 'Sending Reset Email...' : 'Send Reset Link'}
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
