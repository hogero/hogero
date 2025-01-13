import { Geist, Lora, Nunito } from "next/font/google";

export const geistSans = Geist({
  subsets: ["latin"],
});

export const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "600"], // Regular y Bold
});

export const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "700"], // Regular y Bold
});