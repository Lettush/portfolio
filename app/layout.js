import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jared's Portfolio",
  description: "This is Jared Neil Hortaleza's Portfolio.",
  icons: {
    icon: "images/favicon.ico",
  },
};

export const viewport = {
  themeColor: "green",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
