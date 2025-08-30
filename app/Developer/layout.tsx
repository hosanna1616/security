import type { Metadata } from "next";
import { RequireAuth } from "@/app/providers";

export const metadata: Metadata = {
  title: "Developer – Secure Systems",
};

export default function DeveloperLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <RequireAuth allow={["developer"]}>{children}</RequireAuth>;
}
