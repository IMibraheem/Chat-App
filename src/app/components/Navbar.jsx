"use client";
import { useState } from "react";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // You can use any icon library

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-black bg-opacity-50 backdrop-blur-md fixed w-full top-0 z-50">
      <Link href="/" className="text-xl font-bold text-purple-400">
        ChatRipple
      </Link>

      {/* Desktop menu */}
      <div className="hidden md:flex space-x-6 items-center">
        <Link href="/" className="hover:text-purple-300 transition">
          Home
        </Link>
        <Link href="/how-to-chat" className="hover:text-purple-300 transition">
          How to Chat
        </Link>
        <Link href="/forum" className="hover:text-purple-300 transition">
          Forum
        </Link>
        <Link href="/about" className="hover:text-purple-300 transition">
          About
        </Link>
        <UserButton />
      </div>

      {/* Mobile menu button */}
      <button
        className="md:hidden text-purple-400"
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile menu panel */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-black bg-opacity-90 backdrop-blur-md flex flex-col items-center space-y-4 py-4 md:hidden">
          <Link
            href="/"
            className="hover:text-purple-300 transition"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/how-to-chat"
            className="hover:text-purple-300 transition"
            onClick={() => setIsOpen(false)}
          >
            How to Chat
          </Link>
          <Link
            href="/forum"
            className="hover:text-purple-300 transition"
            onClick={() => setIsOpen(false)}
          >
            Forum
          </Link>
          <Link
            href="/about"
            className="hover:text-purple-300 transition"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <UserButton />
        </div>
      )}
    </nav>
  );
}
