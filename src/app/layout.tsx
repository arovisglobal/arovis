import type { Metadata } from "next";
import { ReactNode } from "react";
import "@/index.css";

export const metadata: Metadata = {
  title: "Arovis - Ad Network Solutions",
  description: "Connect with premium publishers and advertisers on our global ad network",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
