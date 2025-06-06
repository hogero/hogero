import "./globals.css";
import { lora, nunito } from "./fonts";
import Navbar from "./components/Navbar";
import style from "./inicio.module.css";
import ToastProvider from "./components/ToastProvider";
import { Suspense } from "react";
import Seo from "./components/Seo";
import Footer from "./components/Footer";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Seo/>
      <body className={`${nunito.className} antialiased container`}>
        <ToastProvider />
        <Navbar />
        <div className={style.generalInfo}>
          <Suspense>
            {children}
          </Suspense>
        </div>
        <Footer/>
      </body>
    </html>
  );
}
