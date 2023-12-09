"use client";

import pb from "@/app/lib/pocketbase";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  useEffect(() => {
    if (!pb.authStore.isAdmin) {
      router.push("/profile");
    }
  }, []);

  return children;
}
