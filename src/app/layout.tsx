import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemedPage from "./components/ThemedPage";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Luis Thieme",
  description: "Luis Thieme",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemedPage>{children}</ThemedPage>
      </body>
    </html>
  );
}
