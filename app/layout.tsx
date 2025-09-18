import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Evo9Labs - The 9 Dimensions of Digital Evolution",
  description:
    "Transforming ideas into digital reality with cutting-edge technology and innovative solutions.",
  keywords:
    "web development, mobile apps, UI/UX design, digital solutions, technology",
  authors: [{ name: "Evo9Labs" }],
  openGraph: {
    title: "Evo9Labs - The 9 Dimensions of Digital Evolution",
    description:
      "Transforming ideas into digital reality with cutting-edge technology and innovative solutions.",
    type: "website",
  },
  icons: {
    icon: "/favicon.png", // or /logo.png if you want same image
    shortcut: "/favicon.png",
  },
};

const queryClient = new QueryClient();

function ClientWrapper({ children }: { children: React.ReactNode }) {
  return (
    <TooltipProvider>
      {children}
      <Toaster />
      <Sonner />
    </TooltipProvider>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
