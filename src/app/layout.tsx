import type { Metadata } from "next";
import "./globals.css";
import { Poppins, Roboto_Mono } from "next/font/google";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Denis | Software Developer",
  description:
    "Portifolio de software developer (desenvolvedor de software) Denis Silva",
};
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "700", "800", "900", "500", "300"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className}  text-black `}>{children}</body>
    </html>
  );
}
