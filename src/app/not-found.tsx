"use client";

import "@/styles/not-found.css";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-linear-to-br from-indigo-50 via-purple-50 to-blue-50 p-4">
      {/* Floating Particles */}
      <div className="float1 absolute top-10 left-10 h-24 w-24 rounded-full bg-indigo-300 opacity-40"></div>
      <div className="float2 absolute top-32 right-20 h-20 w-20 rounded-full bg-purple-300 opacity-50"></div>
      <div className="float3 absolute bottom-20 left-32 h-16 w-16 rounded-full bg-blue-300 opacity-45"></div>
      <div className="float4 absolute right-10 bottom-40 h-28 w-28 rounded-full bg-indigo-400 opacity-35"></div>

      {/* Extra Floating Particles */}
      <div
        className="float2 absolute top-20 left-1/3 h-12 w-12 rounded-full bg-violet-300 opacity-40"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="float1 absolute top-1/3 right-1/4 h-10 w-10 rounded-full bg-cyan-300 opacity-45"
        style={{ animationDelay: "4s" }}
      ></div>
      <div
        className="float3 absolute bottom-1/3 left-1/4 h-14 w-14 rounded-full bg-purple-400 opacity-40"
        style={{ animationDelay: "6s" }}
      ></div>
      <div
        className="float4 absolute right-1/3 bottom-16 h-18 w-18 rounded-full bg-indigo-500 opacity-35"
        style={{ animationDelay: "1s" }}
      ></div>

      {/* Large Floating Particles */}
      <div
        className="float5 absolute top-1/4 left-16 h-22 w-22 rounded-full bg-blue-400 opacity-30"
        style={{ animationDelay: "3s" }}
      ></div>
      <div
        className="float6 absolute top-3/4 right-16 h-20 w-20 rounded-full bg-purple-500 opacity-35"
        style={{ animationDelay: "5s" }}
      ></div>
      <div
        className="float1 absolute top-1/2 left-8 h-16 w-16 rounded-full bg-indigo-300 opacity-40"
        style={{ animationDelay: "7s" }}
      ></div>
      <div
        className="float2 absolute top-1/2 right-8 h-18 w-18 rounded-full bg-violet-400 opacity-35"
        style={{ animationDelay: "8s" }}
      ></div>

      {/* Small Floating Particles */}
      <div
        className="float3 absolute top-40 left-1/2 h-8 w-8 rounded-full bg-blue-500 opacity-50"
        style={{ animationDelay: "1.5s" }}
      ></div>
      <div
        className="float5 absolute bottom-32 left-2/3 h-6 w-6 rounded-full bg-purple-600 opacity-45"
        style={{ animationDelay: "2.5s" }}
      ></div>
      <div
        className="float6 absolute top-2/3 right-1/2 h-10 w-10 rounded-full bg-indigo-600 opacity-40"
        style={{ animationDelay: "3.5s" }}
      ></div>

      {/* Main Content */}
      <div className="relative w-full max-w-md transform rounded-2xl border border-white/20 bg-white/90 p-12 text-center shadow-2xl backdrop-blur-sm transition-all duration-500 hover:scale-105">
        {/* Badge */}
        <div className="pulse-glow absolute -top-4 left-1/2 z-10 -translate-x-1/2 transform rounded-full bg-indigo-500 px-6 py-2 font-mono text-sm text-white shadow-lg">
          404 Not Found
        </div>

        {/* Icon */}
        <div className="mx-auto mt-4 mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-linear-to-br from-indigo-400 to-purple-500 shadow-lg">
          <svg
            className="h-10 w-10 text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        <h1 className="mb-4 bg-linear-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-4xl font-bold text-transparent">
          Page Not Found
        </h1>

        <p className="mb-8 text-lg leading-relaxed text-gray-600">
          Oops! The page you&apos;re looking for doesn&apos;t exist. It might
          have been moved, deleted, or you entered the wrong URL.
        </p>

        <div className="space-y-4">
          <Link
            href="/"
            className="inline-block transform rounded-xl bg-linear-to-r from-blue-600 to-blue-700 px-8 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:from-blue-700 hover:to-blue-800 hover:shadow-lg"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
