"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

const Card = ({ e }) => {
  const { heading, description, btnText, slug } = e;

  return (
    <div className="bg-[#141414] border border-purple-700 p-6 rounded-xl shadow-md hover:shadow-purple-800 hover:scale-105 transition-all duration-300 cursor-pointer flex flex-col justify-center items-center gap-2">
      <div>
        <h4 className="text-2xl font-semibold mb-3 text-purple-400">
          {heading}
        </h4>
        <p className="text-gray-300">{description}</p>
      </div>
      {btnText && (
        <Link
          href={`/forum/${slug.toLowerCase().replace(/\s+/g, "-")}`}
          className="inline-block bg-gradient-to-r from-purple-600 to-purple-800 text-white px-4 py-2 rounded hover:from-purple-700 hover:to-purple-900 transition w-auto"
        >
          {btnText}
        </Link>
      )}
    </div>
  );
};

export default Card;
