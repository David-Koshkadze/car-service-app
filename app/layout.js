import "./globals.css";
import 'bpg-mrgvlovani/css/bpg-mrgvlovani.min.css'
import { Inter } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tow.ge - ევაკუატორის მომსახურება",
  description: "Created by D.K.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ka">
      <body className={inter.className}>
        <div className="w-full h-1 bg-blue-500"></div>
        <Header />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
