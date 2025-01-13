import type { Metadata } from "next";
import "./globals.css";
import { lora, nunito } from "./fonts";
import Navbar from "./components/Navbar";
import style from "./styles.module.css";
import ToastProvider from "./components/ToastProvider";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "HOGERO",
  description: "Gerontología a la puerta de tu casa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.className} antialiased container`}>
        <ToastProvider />
        <Navbar />
        <div className={style.generalInfo}>
          <Suspense>
            {children}
          </Suspense>
        </div>
      </body>
    </html>
  );
}
