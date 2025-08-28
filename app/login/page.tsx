"use client ";
import { ClerkProvider, SignIn } from "@clerk/nextjs";

export default function LoginPage() {
  return (
    <ClerkProvider>
   
      <div className="flex justify-center items-center h-screen">
        <SignIn path="/sign-in" routing="path" signUpUrl="/signup" />
      </div>
    </ClerkProvider>
  );
}