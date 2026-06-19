export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <nav className="flex items-center justify-between border-b border-gray-800 px-6 py-4">
        <h1 className="text-2xl font-bold">Monowire</h1>

        <div className="flex gap-4 text-sm text-gray-300">
          <button className="transition hover:text-blue-400">Home</button>
          <button className="transition hover:text-blue-400">Reels</button>
          <button className="transition hover:text-blue-400">Posts</button>
          <button className="transition hover:text-blue-400">Profile</button>
        </div>
      </nav>

      <section className="mx-auto flex min-h-[calc(100vh-73px)] max-w-5xl flex-col justify-center px-6 py-16">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gray-400">
          A new social experience
        </p>

        <h2 className="max-w-3xl text-4xl font-extrabold uppercase leading-tight sm:text-5xl md:text-6xl">
          Connect. Share. Discover.
        </h2>

        <p className="mt-4 max-w-2xl text-base text-gray-400 sm:text-lg">
          Share photos, reels, and thoughts in one simple place.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <button className="rounded border border-blue-500 bg-blue-500 px-5 py-2.5 font-medium text-white transition hover:bg-blue-600">
            Sign In
          </button>

          <button className="rounded border border-gray-600 px-5 py-2.5 font-medium text-white transition hover:border-gray-400 hover:bg-white/5">
            Explore
          </button>
        </div>

        <div className="mt-12">
          <h3 className="mb-4 text-2xl font-bold">What Monowire will feature</h3>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-gray-800 bg-white/5 p-5">
              <h4 className="text-lg font-semibold">Photo Posts</h4>
              <p className="mt-2 text-sm text-gray-400">
                Upload and share images.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-800 bg-white/5 p-5">
              <h4 className="text-lg font-semibold">Reels</h4>
              <p className="mt-2 text-sm text-gray-400">
                Share short videos.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-800 bg-white/5 p-5">
              <h4 className="text-lg font-semibold">Quick Thoughts</h4>
              <p className="mt-2 text-sm text-gray-400">
                Post short messages and updates.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-800 bg-white/5 p-5">
              <h4 className="text-lg font-semibold">Private Chat</h4>
              <p className="mt-2 text-sm text-gray-400">
                Message people securely inside the app.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="mb-4 text-2xl font-bold">Inside the app</h3>

          <div className="rounded-2xl border border-gray-800 bg-white/5 p-5 text-sm text-gray-400">
            Real posts, real reels, and real trending content will appear here
            after the app is connected to users and a database.
          </div>
        </div>

        <div className="mt-12">
          <h3 className="mb-4 text-2xl font-bold">Why Monowire</h3>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-gray-800 bg-white/5 p-5">
              <h4 className="text-lg font-semibold">Simple</h4>
              <p className="mt-2 text-sm text-gray-400">
                Clean layout with no clutter.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-800 bg-white/5 p-5">
              <h4 className="text-lg font-semibold">Flexible</h4>
              <p className="mt-2 text-sm text-gray-400">
                Can grow into posts, reels, and chat.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-800 bg-white/5 p-5">
              <h4 className="text-lg font-semibold">Built from scratch</h4>
              <p className="mt-2 text-sm text-gray-400">
                Your first real project, step by step.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-gray-800 py-6 text-center text-gray-500">
        © 2026 Monowire. Built by Atharva.
      </footer>
    </main>
  );
}