"use client";

import "@/styles/error.css";
import Link from "next/link";

export default function Error() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-linear-to-br from-red-50 via-rose-50 to-pink-50 p-4">
      {/* Floating Particles */}
      <div className="float1 absolute top-12 left-12 h-24 w-24 rounded-full bg-red-300 opacity-40"></div>
      <div className="float2 absolute top-36 right-24 h-20 w-20 rounded-full bg-rose-300 opacity-50"></div>
      <div className="float3 absolute bottom-24 left-36 h-16 w-16 rounded-full bg-pink-300 opacity-45"></div>
      <div className="float4 absolute right-12 bottom-44 h-28 w-28 rounded-full bg-red-400 opacity-35"></div>

      {/* Extra Floating Particles */}
      <div
        className="float2 absolute top-24 left-1/3 h-14 w-14 rounded-full bg-orange-300 opacity-40"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="float1 absolute top-1/3 right-1/4 h-12 w-12 rounded-full bg-amber-300 opacity-45"
        style={{ animationDelay: "4s" }}
      ></div>
      <div
        className="float3 absolute bottom-1/3 left-1/4 h-18 w-18 rounded-full bg-rose-400 opacity-40"
        style={{ animationDelay: "6s" }}
      ></div>
      <div
        className="float4 absolute right-1/3 bottom-20 h-22 w-22 rounded-full bg-red-500 opacity-35"
        style={{ animationDelay: "1s" }}
      ></div>

      {/* Large Floating particles */}
      <div
        className="float5 absolute top-1/4 left-20 h-26 w-26 rounded-full bg-pink-400 opacity-30"
        style={{ animationDelay: "3s" }}
      ></div>
      <div
        className="float6 absolute top-3/4 right-20 h-24 w-24 rounded-full bg-rose-500 opacity-35"
        style={{ animationDelay: "5s" }}
      ></div>
      <div
        className="float1 absolute top-1/2 left-10 h-20 w-20 rounded-full bg-red-300 opacity-40"
        style={{ animationDelay: "7s" }}
      ></div>
      <div
        className="float2 absolute top-1/2 right-10 h-22 w-22 rounded-full bg-orange-400 opacity-35"
        style={{ animationDelay: "8s" }}
      ></div>

      {/* Small Floating Particles */}
      <div
        className="float3 absolute top-44 left-1/2 h-10 w-10 rounded-full bg-pink-500 opacity-50"
        style={{ animationDelay: "1.5s" }}
      ></div>
      <div
        className="float5 absolute bottom-36 left-2/3 h-8 w-8 rounded-full bg-rose-600 opacity-45"
        style={{ animationDelay: "2.5s" }}
      ></div>
      <div
        className="float6 absolute top-2/3 right-1/2 h-12 w-12 rounded-full bg-red-600 opacity-40"
        style={{ animationDelay: "3.5s" }}
      ></div>

      {/* Main Card */}
      <div className="relative w-full max-w-md transform rounded-2xl border border-white/20 bg-white/90 p-12 text-center shadow-2xl backdrop-blur-sm transition-all duration-500 hover:scale-105">
        {/* Badge */}
        <div className="pulse-glow absolute -top-4 left-1/2 z-10 -translate-x-1/2 transform rounded-full bg-red-500 px-6 py-2 font-mono text-sm text-white shadow-lg">
          401 Unauthorized
        </div>

        {/* Icon */}
        <div className="mx-auto mt-4 mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-linear-to-br from-red-400 to-orange-500 shadow-lg">
          <svg
            className="h-10 w-10 text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
        </div>

        <h1 className="mb-4 bg-linear-to-r from-red-600 via-rose-600 to-pink-600 bg-clip-text text-4xl font-bold text-transparent">
          Access Denied
        </h1>

        <p className="mb-8 text-lg leading-relaxed text-gray-600">
          Authentication failed! You must use a valid
          <span className="font-semibold text-blue-600"> @ciputra.ac.id </span>
          email account to access this application.
        </p>

        <div className="space-y-4">
          <Link
            href="/"
            className="inline-block transform rounded-xl bg-linear-to-r from-blue-600 to-blue-700 px-8 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:from-blue-700 hover:to-blue-800 hover:shadow-lg"
          >
            Try Again
          </Link>
        </div>
      </div>
    </div>
  );
}
