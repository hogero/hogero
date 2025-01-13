import type { Metadata } from "next";
import "./globals.css";
import { lora, nunito } from "./fonts";
import Navbar from "./components/Navbar";
import style from "./styles.module.css";

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
        <Navbar />
        <div className={style.generalInfo}>
          {children}
        </div>
      </body>
    </html>
  );
}
