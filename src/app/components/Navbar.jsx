"use client";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Navbar() {
  // const user = useUser();
  // console.log(user, "id");

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-black bg-opacity-50 backdrop-blur-md fixed w-full top-0 z-50">
      <Link href={"/"} className="text-xl font-bold text-purple-400">
        ChatRipple
      </Link>
      <div className="space-x-6 flex justify-center items-center">
        <Link href="/" className="hover:text-purple-300 transition">
          Home
        </Link>
        <Link href="/how-to-chat" className="hover:text-purple-300 transition">
          How to Chat
        </Link>
        <Link href="/forum" className="hover:text-purple-300 transition">
          forum
        </Link>
        <Link href="/about" className="hover:text-purple-300 transition">
          About
        </Link>
        <UserButton />
      </div>
    </nav>
  );
}
