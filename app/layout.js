import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Car Service App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ka">
      <body className={inter.className}>
        <Header />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
