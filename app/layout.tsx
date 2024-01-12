import Footer from "@/components/Footer";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Car Expo",
  description: "Dicover the best cars in the verse",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar></Navbar>
        {children}
      <Footer></Footer></body>
    </html>
  );
}
