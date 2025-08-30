import type { Metadata } from "next";
import { RequireAuth } from "@/app/providers";

export const metadata: Metadata = {
  title: "Marketing – Secure Systems",
};

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <RequireAuth allow={["marketing"]}>{children}</RequireAuth>;
}
