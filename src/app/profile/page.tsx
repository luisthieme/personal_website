"use client";

import { useEffect, useState } from "react";
import pb from "../lib/pocketbase";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
import Loading from "../components/Loading";

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);
  const [username, setUsername] = useState("");
  const router = useRouter();

  useEffect(() => {
    setUsername(pb.authStore.model?.email);
    if (!pb.authStore.isValid) {
      redirect("/login");
    }
    setIsLoading(false);
  }, []);

  function logout() {
    console.log("logging out...");
    pb.authStore.clear();
    router.push("/login");
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <h1>Name: {username}</h1>
      <button onClick={logout}>Log out</button>
    </div>
  );
}
