"use client";

import { authClient } from "@/lib/auth-client";
import { FcGoogle } from "react-icons/fc";

export default function SignInButton() {
  const handleSignIn = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/dashboard",
    });
  };

  return (
    <button
      onClick={handleSignIn}
      className="bg-white lg:bg-transparent flex flex-col justify-center w-full items-center gap-1 rounded-md p-1 text-base text-gray-900"
    >
      <FcGoogle size={25} />
      <span className="text-md text-black md:text-black">
        Sign in with Google
      </span>
    </button>
  );
}
