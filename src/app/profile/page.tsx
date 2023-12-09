"use client";

import { useEffect, useState } from "react";
import pb from "../lib/pocketbase";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
import Loading from "../components/Loading";
import Link from "next/link";

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);
  const [username, setUsername] = useState("");
  const [accountStatus, setAccountStatus] = useState("");
  const [admin, setAdmin] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setUsername(pb.authStore.model?.email);
    setAccountStatus(pb.authStore.model?.verified);
    setAdmin(pb.authStore.isAdmin);

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
    <>
      <div className="mt-8 h-fit w-1/2  phone:w-full mx-auto grid grid-cols-2 gap-4 gap-x-0">
        <h1 className="mx-auto text-lg phone:text-sm font-bold w-fit px-4">
          E-Mail:
        </h1>
        <h1 className="mx-auto text-lg phone:text-sm font-bold w-fit px-4">
          {username}
        </h1>
        <hr />
        <hr />
        <h1 className="mx-auto text-lg phone:text-sm font-bold w-fit px-4">
          Account Status:
        </h1>
        <h1 className="mx-auto text-lg phone:text-sm font-bold w-fit text-center px-4">
          {accountStatus
            ? "Verified"
            : "Not Verified. This process may take some time. Please be patient."}
        </h1>
        <hr />
        <hr />
        <h1 className="mx-auto text-lg phone:text-sm font-bold w-fit px-4">
          Account Rights:
        </h1>
        <h1 className="mx-auto text-lg phone:text-sm font-bold w-fit px-4">
          User
        </h1>
        <hr />
        <hr />
      </div>
      <div className="w-fit mx-auto mt-6">
        <button
          onClick={logout}
          className="mx-auto w-fit rounded-md bg-white/10 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white/20">
          Log out
        </button>
      </div>
      {admin ? (
        <div className="w-fit mx-auto mt-6">
          <Link
            href={"/admin/dashboard"}
            className="mx-auto w-fit rounded-md bg-white/10 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white/20">
            Admin Dashboard
          </Link>
        </div>
      ) : (
        <p></p>
      )}
    </>
  );
}
