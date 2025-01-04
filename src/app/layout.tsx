import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css"
import "./globals.css";
import { geistSans } from "./fonts";
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
      <body className={`${geistSans.className} antialiased container`}>
        <Navbar />
        <div className={style.generalInfo}>
          {children}
        </div>
      </body>
    </html>
  );
}
