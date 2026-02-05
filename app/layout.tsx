import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll/SmoothScroll";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <SmoothScroll>
          <div className="relative z-10 bg-off-white mb-100 shadow-b">
            <Navbar />
            {children}
          </div>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
