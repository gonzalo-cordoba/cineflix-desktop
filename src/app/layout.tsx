import type { Metadata } from "next";
import { Montserrat as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/component/navbar";
import Footer from "@/components/component/footer";
import { Providers } from "./Providers";
import { TicketProvider } from "@/context/TicketContext";
import { Toaster } from "react-hot-toast";
import { Suspense } from "react";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Cineflix - ¡Los mejores estrenos para vos!",
  description: "Cineflix",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers>
          <TicketProvider>
            <Navbar />
            <Toaster />
            {children}
            <Footer />
          </TicketProvider>
        </Providers>
      </body>
    </html>
  );
}
