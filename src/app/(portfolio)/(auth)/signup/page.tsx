'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const SignUp = () => {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const response = await fetch('/api/auth/signUp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, name }),
    });

    const data = await response.json();
    setLoading(false);

    if (response.ok) {
      alert('User created successfully!');
      router.push('/waiting');
    } else {
      alert(data.message || 'Error creating user');
    }
  };

  return (
    <section className='min-h-screen flex justify-center items-center'>
    <div className="max-w-md mx-auto bg-white/90 dark:bg-gray-900 p-8 rounded-lg shadow-md text-black dark:text-white transition-all duration-500">
      <h1 className="text-3xl font-bold mb-6 text-center">Sign Up</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 dark:border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-zinc-800"
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 dark:border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-zinc-800"
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 dark:border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-zinc-800"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition-colors disabled:opacity-60"
        >
          {loading ? 'Signing up...' : 'Sign Up'}
        </button>
      </form>
    </div>
    </section>
  );
};

export default SignUp;
