"use client";

import { ThemeProvider } from "next-themes";
import { useEffect, useMemo, useState, createContext, useContext } from "react";
import { useRouter } from "next/navigation";

type UserRole = "admin" | "manager" | "developer" | "marketing";

type AuthUser = {
  email: string;
  role: UserRole;
};

type AuthContextValue = {
  user: AuthUser | null;
  loginWithEmail: (email: string) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

const EMAIL_ROLE_MAP: Record<string, UserRole> = {
  "admin@example.com": "admin",
  "manager@example.com": "manager",
  "developer@example.com": "developer",
  "marketing@example.com": "marketing",
};

function useHydrated(): boolean {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return mounted;
}

export function Providers({ children }: { children: React.ReactNode }) {
  const mounted = useHydrated();

  const [user, setUser] = useState<AuthUser | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("auth:user");
      if (raw) setUser(JSON.parse(raw));
    } catch {}
  }, []);

  const loginWithEmail = async (email: string) => {
    const normalized = email.trim().toLowerCase();
    const role = EMAIL_ROLE_MAP[normalized];
    if (!role) throw new Error("Unauthorized email for mock login");
    const nextUser: AuthUser = { email: normalized, role };
    setUser(nextUser);
    try {
      localStorage.setItem("auth:user", JSON.stringify(nextUser));
    } catch {}
  };

  const logout = () => {
    setUser(null);
    try {
      localStorage.removeItem("auth:user");
    } catch {}
  };

  const value = useMemo<AuthContextValue>(
    () => ({ user, loginWithEmail, logout }),
    [user]
  );

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      storageKey="secure-shield-theme"
    >
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    </ThemeProvider>
  );
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within Providers");
  return ctx;
}

export function RequireAuth({
  children,
  allow,
}: {
  children: React.ReactNode;
  allow: UserRole[];
}) {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.replace("/login");
      return;
    }
    if (!allow.includes(user.role)) {
      router.replace("/login");
    }
  }, [user, allow, router]);

  if (!user) return null;
  if (!allow.includes(user.role)) return null;
  return <>{children}</>;
}
