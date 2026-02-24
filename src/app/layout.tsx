import type { Metadata } from "next";
import { Cookie, Open_Sans } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  display: "swap",
});

const cookie = Cookie({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-cookie",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Davhy Andrade",
  description:
    "Portfólio de Davhy Andrade, desenvolvedor web especializado em aplicações modernas com React e Next.js. Projetos autorais, design digital e fotografia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.className} ${cookie.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
