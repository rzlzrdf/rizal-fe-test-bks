import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import dayjs from "dayjs";
import { cn } from "@/lib/utils";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "500", "700"],
});

export const metadata: Metadata = {
  title: "Skill Test",
  description: "Skill test by Rizal - 085738719488",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(poppins.className, ` antialiased`)}>
        <header className="px-3 py-2 flex items-center justify-between">
          <div className="">
            <p className="font-bold">Rizal Lazuardi Firdaus</p>
            <p>{dayjs().format("DD-MM-YYYY")}</p>
          </div>
          <div className="">
            <p className="font-bold">Web Developer Batch 6</p>
            <p>Section 1 - Frontend Test</p>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
