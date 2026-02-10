"use client";

import { authClient } from "@/lib/auth-client";

export function SignIn() {
  const handleSignIn = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/dashboard",
    });
  };

  return (
    <button onClick={handleSignIn} className="btn-google">
      Sign in with Google
    </button>
  );
}
