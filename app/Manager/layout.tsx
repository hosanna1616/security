import type { Metadata } from "next";
import { RequireAuth } from "@/app/providers";

export const metadata: Metadata = {
  title: "Manager – Secure Systems",
};

export default function ManagerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <RequireAuth allow={["manager"]}>{children}</RequireAuth>;
}
