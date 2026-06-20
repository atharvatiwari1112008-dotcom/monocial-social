export default function Login() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8">
        <h1 className="text-3xl font-bold text-center">
          Welcome to Monowire
        </h1>

        <p className="mt-3 text-center text-white/60">
          Sign in to continue
        </p>

        <button className="mt-8 w-full rounded-full bg-white py-3 font-semibold text-black hover:bg-gray-200 transition">
          Continue with Google
        </button>
      </div>
    </main>
  );
}