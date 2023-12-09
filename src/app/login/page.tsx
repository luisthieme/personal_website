"use client";

import { useEffect, useState } from "react";
import pb from "../lib/pocketbase";
import { useForm } from "react-hook-form";
import { redirect, useRouter } from "next/navigation";
import { XCircleIcon } from "@heroicons/react/24/outline";

export default function Page() {
  const [isLoading, setIsLoading] = useState(false);
  const [passwordIsIncorrect, setPasswordIsIncorrect] = useState(false);
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  useEffect(() => {
    if (pb.authStore.isValid) {
      router.push("/profile");
    }
  }, []);

  async function login(data: any) {
    setIsLoading(true);
    try {
      setPasswordIsIncorrect(false);
      const authData = await pb.admins.authWithPassword(
        data.email,
        data.password
      );
      router.push("/profile");
    } catch (e) {
      try {
        setPasswordIsIncorrect(false);
        const authData = await pb
          .collection("users")
          .authWithPassword(data.email, data.password);
        router.push("/profile");
      } catch (e) {
        setPasswordIsIncorrect(true);
      }
    }

    setIsLoading(false);
  }

  function startRegistration() {
    router.push("/registration");
  }

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center py-4 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-400">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
          <div className="bg-transparent mx-4 px-6 py-12 border border-gray-400 sm:rounded-lg sm:px-12">
            <form
              className="space-y-6"
              onSubmit={handleSubmit(login)}
              method="POST">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-400">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    {...register("email")}
                    required
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 outline-none"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-400">
                  Password
                </label>
                <div className="mt-2">
                  <input
                    id="password"
                    type="password"
                    autoComplete="current-password"
                    {...register("password")}
                    required
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset outline-none sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              {passwordIsIncorrect ? (
                <div className="rounded-md bg-transparent outline outline-red-600 p-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <XCircleIcon
                        className="h-5 w-5 text-red-600"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-red-600">
                        Invalid account information.
                      </h3>
                    </div>
                  </div>
                </div>
              ) : (
                <p></p>
              )}

              <div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="flex w-full justify-center rounded-md bg-gray-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-700">
                  {isLoading ? "Loading..." : "Sign in"}
                </button>
              </div>
            </form>

            <div>
              <div className="relative mt-10">
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true">
                  <div className="w-full border-t border-gray-200" />
                </div>
                <div className="relative flex justify-center text-sm font-medium leading-6">
                  <span className="bg-black px-6 text-gray-400">
                    No Account?
                  </span>
                </div>
              </div>

              <div className="mt-6">
                <button
                  type="button"
                  disabled={isLoading}
                  onClick={startRegistration}
                  className="flex w-full justify-center rounded-md bg-gray-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-700">
                  Register Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
