import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./global.css";

import Header from "./components/shared/header/header";
import Footer from "./components/shared/footer/footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "AtmaDeva Retreats",
  description: "Йога, медитации, астрология, звукотерапия и путешествия в горах Гималаев",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
