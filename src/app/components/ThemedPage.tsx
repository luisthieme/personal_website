"use client";

import { useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import pb from "../lib/pocketbase";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navigation = [
  { name: "Socials", href: "/socials" },
  { name: "Career", href: "/Career" },
  { name: "Projects", href: "/projects" },
  { name: "Sports", href: "/sports" },
];

export default function ThemedPage({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsLoggedIn(pb.authStore.isValid);
  }, [pathname]);

  return (
    <div>
      <header className="bg-transparent border-b border-b-gray-600 mb-4">
        <nav
          className="mx-auto flex max-w-8xl items-center justify-between p-4 lg:px-8 "
          aria-label="Global">
          <div className="flex flex-1">
            <div className="hidden lg:flex lg:gap-x-12">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-semibold leading-6 text-gray-400 hover:text-white">
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(true)}>
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>
          <Link href="/" className="-m-1.5 p-1.5">
            <h1 className="font-bold text-lg">Luis Thieme</h1>
          </Link>
          <div className="flex flex-1 justify-end">
            <Link
              href={isLoggedIn ? "/profile" : "/login"}
              className="text-sm font-semibold leading-6 flex justify-center text-gray-400 hover:text-white">
              {isLoggedIn ? (
                <span className="inline-block h-6 w-6 overflow-hidden rounded-full bg-gray-100">
                  <svg
                    className="h-full w-full text-gray-300"
                    fill="currentColor"
                    viewBox="0 0 24 24">
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </span>
              ) : (
                "Log in"
              )}
              {isLoggedIn ? "" : <span aria-hidden="true">&rarr;</span>}
            </Link>
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-10" />
          <Dialog.Panel className="fixed inset-y-0 left-0 z-10 w-full overflow-y-auto bg-black p-4">
            <div className="flex items-center justify-between">
              <div className="flex flex-1">
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-400"
                  onClick={() => setMobileMenuOpen(false)}>
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <Link href="/" className="-m-1.5 p-1.5">
                <p className="font-bold text-lg text-white">Luis Thieme</p>
              </Link>
              <div className="flex flex-1 justify-end">
                <Link
                  href={isLoggedIn ? "/profile" : "/login"}
                  className="text-sm font-semibold leading-6 text-gray-400 hover:text-white">
                  {isLoggedIn ? (
                    <span className="inline-block h-6 w-6 overflow-hidden rounded-full bg-gray-100">
                      <svg
                        className="h-full w-full text-gray-300"
                        fill="currentColor"
                        viewBox="0 0 24 24">
                        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </span>
                  ) : (
                    "Log in"
                  )}
                  {isLoggedIn ? "" : <span aria-hidden="true">&rarr;</span>}
                </Link>
              </div>
            </div>
            <div className="mt-6 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-400 hover:text-white">
                  {item.name}
                </Link>
              ))}
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
      <div>{children}</div>
    </div>
  );
}
