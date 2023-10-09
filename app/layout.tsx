import type { Metadata } from "next";

import { Inter, Montserrat, Poppins } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import { ModalProvider } from "@/providers/modal-provider";
import { ToasterProvider } from "@/providers/toast-provider";

import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });
const poppins = Inter({
  weight: ['400', '700', '800'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Admin Dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={poppins.className}>
          <ToasterProvider />
          <ModalProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
