import type { Metadata } from "next";
import { Dancing_Script, Quicksand } from "next/font/google";
import "./globals.css";

const dancingScript = Dancing_Script({
  variable: "--font-dancing",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Voor Mijn Liefste ❤️",
  description: "Een speciaal bericht voor jou",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body className={`${dancingScript.variable} ${quicksand.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
