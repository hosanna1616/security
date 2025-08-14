"use client";

import { ClerkProvider, SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <ClerkProvider>
      <div className="flex justify-center items-center h-screen">
        <SignUp
          path="/signup"
          routing="path"
          redirectUrl="/dashboard" // 👈 After successful signup
          appearance={{
            elements: {
              footer: { display: "none" },
              headerSubtitle: { display: "none" },
            },
          }}
        />
      </div>
    </ClerkProvider>
  );
}
