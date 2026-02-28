import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Skool Ops",
  description: "Revenue-first operating dashboard for Skool creators",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
