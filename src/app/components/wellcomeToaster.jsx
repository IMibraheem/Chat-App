// 👇 Separate client-only component to show toast
"use client";
import { useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import toast from "react-hot-toast";

export function WelcomeToast() {
  const { user } = useUser();
  console.log(user, "user");

  useEffect(() => {
    if (user) {
      toast.success(`Welcome, ${user.firstName || "there"}! 🎉`);
    }
  }, [user]);

  return null;
}
