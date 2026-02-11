"use client";

import "@/styles/not-found.css";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-50 via-purple-50 to-blue-50 flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute top-10 left-10 w-24 h-24 bg-indigo-300 rounded-full opacity-40 float1"></div>
      <div className="absolute top-32 right-20 w-20 h-20 bg-purple-300 rounded-full opacity-50 float2"></div>
      <div className="absolute bottom-20 left-32 w-16 h-16 bg-blue-300 rounded-full opacity-45 float3"></div>
      <div className="absolute bottom-40 right-10 w-28 h-28 bg-indigo-400 rounded-full opacity-35 float4"></div>

      <div
        className="absolute top-20 left-1/3 w-12 h-12 bg-violet-300 rounded-full opacity-40 float2"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute top-1/3 right-1/4 w-10 h-10 bg-cyan-300 rounded-full opacity-45 float1"
        style={{ animationDelay: "4s" }}
      ></div>
      <div
        className="absolute bottom-1/3 left-1/4 w-14 h-14 bg-purple-400 rounded-full opacity-40 float3"
        style={{ animationDelay: "6s" }}
      ></div>
      <div
        className="absolute bottom-16 right-1/3 w-18 h-18 bg-indigo-500 rounded-full opacity-35 float4"
        style={{ animationDelay: "1s" }}
      ></div>

      <div
        className="absolute top-1/4 left-16 w-22 h-22 bg-blue-400 rounded-full opacity-30 float5"
        style={{ animationDelay: "3s" }}
      ></div>
      <div
        className="absolute top-3/4 right-16 w-20 h-20 bg-purple-500 rounded-full opacity-35 float6"
        style={{ animationDelay: "5s" }}
      ></div>
      <div
        className="absolute top-1/2 left-8 w-16 h-16 bg-indigo-300 rounded-full opacity-40 float1"
        style={{ animationDelay: "7s" }}
      ></div>
      <div
        className="absolute top-1/2 right-8 w-18 h-18 bg-violet-400 rounded-full opacity-35 float2"
        style={{ animationDelay: "8s" }}
      ></div>

      <div
        className="absolute top-40 left-1/2 w-8 h-8 bg-blue-500 rounded-full opacity-50 float3"
        style={{ animationDelay: "1.5s" }}
      ></div>
      <div
        className="absolute bottom-32 left-2/3 w-6 h-6 bg-purple-600 rounded-full opacity-45 float5"
        style={{ animationDelay: "2.5s" }}
      ></div>
      <div
        className="absolute top-2/3 right-1/2 w-10 h-10 bg-indigo-600 rounded-full opacity-40 float6"
        style={{ animationDelay: "3.5s" }}
      ></div>

      <div className="bg-white/90 backdrop-blur-sm p-12 rounded-2xl shadow-2xl text-center max-w-md w-full border border-white/20 transform transition-all duration-500 hover:scale-105 relative">
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-indigo-500 text-white px-6 py-2 rounded-full text-sm font-mono shadow-lg z-10 pulse-glow">
          Error 404
        </div>

        {/* Search/Question mark icon */}
        <div className="mx-auto w-20 h-20 bg-linear-to-br from-indigo-400 to-purple-500 rounded-full flex items-center justify-center mb-6 shadow-lg mt-4">
          <svg
            className="w-10 h-10 text-white"
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

        <h1 className="text-4xl font-bold bg-linear-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
          Page Not Found
        </h1>

        <p className="text-gray-600 mb-8 text-lg leading-relaxed">
          Oops! The page you&apos;re looking for doesn&apos;t exist. It might
          have been moved, deleted, or you entered the wrong URL.
        </p>

        <div className="space-y-4">
          <Link
            href="/"
            className="inline-block bg-linear-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            🏠 Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
