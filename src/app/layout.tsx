import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header/Header";
import { ToastContainer, toast } from "react-toastify";
export const metadata: Metadata = {
  title: "FakeStore – E-commerce Demo",
  description: "Recruitment task for Impact Commerce",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <ToastContainer />
      </body>
    </html>
  );
}
