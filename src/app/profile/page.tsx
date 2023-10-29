"use client";

import { useEffect, useState } from "react";
import pb from "../lib/pocketbase";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
import Loading from "../components/Loading";

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);
  const [username, setUsername] = useState("");
  const [accountStatus, setAccountStatus] = useState("");
  const router = useRouter();

  useEffect(() => {
    setUsername(pb.authStore.model?.email);
    setAccountStatus(pb.authStore.model?.verified);
    if (pb.authStore.model?.verified) {
      console.log("verified");
    } else {
      console.log("not verified");
      console.log(pb.authStore.model);
    }
    if (!pb.authStore.isValid) {
      redirect("/login");
    }
    setIsLoading(false);
  }, []);

  function logout() {
    pb.authStore.clear();
    router.push("/login");
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <h1>Name: {username}</h1>
      <h1>
        Status:{" "}
        {accountStatus
          ? "Verified"
          : "Not Verified. This process may take some time. Please be patient."}
      </h1>
      <button onClick={logout}>Log out</button>
    </div>
  );
}
