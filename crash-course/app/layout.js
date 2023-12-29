import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const inter = Inter({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Mogaka Media",
  description: "Web dev tutorials and more",
  keywords:
    "web development, programming, tutorials, react, nextjs, javascript, css, html, mogaka media, mogaka",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
