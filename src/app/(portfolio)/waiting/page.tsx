export default function WaitingPage() {


  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-2xl font-bold mb-4">Almost there...</h1>
      <p className="text-gray-600 dark:text-gray-300">
        We&apos;ve sent a confirmation link to your email. Please tap it to verify your account.
        <br />
        You can close this page after verifying your account by clicking on the email sent.
      </p>
    </div>
  );
}
