'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';

export default function ConfirmEmailPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const token = searchParams.get('token');

    if (!token) {
      setStatus('error');
      setMessage('Invalid or missing token.');
      return;
    }

    const verifyEmail = async () => {
      try {
        const res = await fetch(`/api/auth/confirmEmail?token=${token}`);
        const data = await res.json();

        if (res.ok) {
          setStatus('success');
          setMessage(data.message || 'Email confirmed!');
          setTimeout(()=>{
            router.push('/login')
          })
        } else {
          setStatus('error');
          setMessage(data.message || 'Verification failed.');
        }
      } catch (err) {
        console.error(err);
        setStatus('error');
        setMessage('An unexpected error occurred.');
      }
    };

    verifyEmail();
  }, [searchParams, router]);

  return (
    <div className='flex text-center justify-center min-h-screen pt-44'>
      {status === 'loading' && <p>Verifying your email...</p>}
      {status === 'success' && <p style={{ color: 'green' }}>{message}</p>}
      {status === 'error' && <p style={{ color: 'red' }}>{message}</p>}
    </div>
  );
}
    