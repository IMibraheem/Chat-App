"use client";
import Card from "./components/Card/Card";
import { CardArray } from "./components/Card/cardArray";
import { CommunityCardArray } from "./components/Card/CommunityCardArray";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <main className="flex flex-col justify-center items-center text-center min-h-screen w-full bg-gradient-to-b from-black via-[#2e0066] to-black px-4">
        <h2 className="text-5xl font-bold text-white mb-6">
          Connect Instantly. Chat Freely.
        </h2>
        <p className="max-w-xl mb-8 text-gray-300">
          Meet ChatWave — your new favorite place to talk, laugh, and share
          moments with friends. Fast, secure, and beautifully designed just for
          you.
        </p>
        <button className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-purple-800 text-white hover:from-purple-700 hover:to-purple-900 transition">
          Start Chatting
        </button>
        <p className="mt-4 text-sm text-gray-400">
          Join 1,000+ happy users who trust us every day 🚀
        </p>
      </main>

      {/* Features Section */}
      <section className="py-20 px-6 bg-black text-center">
        <h3 className="text-4xl font-bold text-white mb-4">
          Why Choose ChatWave?
        </h3>
        <p className="max-w-2xl mx-auto mb-12 text-gray-300">
          ChatWave is more than just a chat app — it’s a vibrant community built
          around privacy, fun, and meaningful connections. Discover why so many
          people are switching to ChatWave.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CardArray.map((e) => (
            <Card e={e} key={e.heading} />
          ))}
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-black via-[#2e0066] to-black text-center">
        <h3 className="text-4xl font-bold text-white mb-4">
          A Growing Community
        </h3>
        <p className="max-w-2xl mx-auto text-gray-300 mb-8">
          Over{" "}
          <span className="text-purple-400 font-semibold">1,000 people</span>{" "}
          already chat daily on ChatWave. We’re building a safe space for
          laughter, late-night talks, and meaningful connections.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          {CommunityCardArray.map((e) => (
            <Card e={e} key={e.heading} />
          ))}
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-20 px-6 bg-black text-center">
        <h3 className="text-4xl font-bold text-white mb-4">
          Ready to Join the Wave?
        </h3>
        <p className="max-w-lg mx-auto text-gray-300 mb-8">
          Dive into conversations that matter. Create your account now and
          experience a new way to chat.
        </p>
        <button className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-purple-800 text-white hover:from-purple-700 hover:to-purple-900 transition">
          Get Started Free
        </button>
      </section>
    </>
  );
}
