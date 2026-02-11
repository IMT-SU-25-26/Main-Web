import { authClient } from "@/lib/auth-client";

export type User = typeof authClient.$Infer.Session.user & {
  role?: "STUDENT" | "TECH" | "SA" | "PR" | "LECTURER";
};

export type Session = {
  user: User;
  session: typeof authClient.$Infer.Session.session;
} | null;
