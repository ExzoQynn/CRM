import { Fira_Code as FontMono, Inter as FontSans, Prompt } from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const fontPrompt = Prompt({
  weight: ["200"],
  subsets: ["latin", "thai"],
  display: "swap",
  variable: "--font-prompt",
});