export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <nav className="border-b border-gray-800 px-6 py-4 flex justify-between items-center">
  <h1 className="text-2xl font-bold">Monowire</h1>

  <div className="flex gap-4">
    <button>Home</button>
    <button>Reels</button>
    <button>Posts</button>
    <button>Profile</button>
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
          Share posts, reels and thoughts with the world.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <button className="rounded border border-blue-500 bg-blue-500 px-5 py-2.5 font-medium text-white transition hover:bg-blue-600">
            Sign In
          </button>

          <button className="rounded border border-gray-600 px-5 py-2.5 font-medium text-white transition hover:border-gray-400 hover:bg-white/5">
            Explore
          </button>
        </div>
        <div className="mt-12 grid grid-cols-3 gap-4">
  <div className="bg-white/5 p-4 rounded">
    <h3 className="text-xl font-bold">0</h3>
    <p>Posts</p>
  </div>

  <div className="bg-white/5 p-4 rounded">
    <h3 className="text-xl font-bold">0</h3>
    <p>Followers</p>
  </div>

  <div className="bg-white/5 p-4 rounded">
    <h3 className="text-xl font-bold">0</h3>
    <p>Following</p>
  </div>
</div>

        <div className="mt-16 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-gray-800 bg-white/5 p-5">
            <h3 className="text-lg font-semibold">Posts</h3>
            <p className="mt-2 text-sm text-gray-400">
              Share photos and update your feed.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-800 bg-white/5 p-5">
            <h3 className="text-lg font-semibold">Reels</h3>
            <p className="mt-2 text-sm text-gray-400">
              Upload short videos and grow your reach.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-800 bg-white/5 p-5">
            <h3 className="text-lg font-semibold">Tweets</h3>
            <p className="mt-2 text-sm text-gray-400">
              Post short thoughts and ideas instantly.
            </p>
          </div>
        </div>
      </section>
    </main>
  );

}