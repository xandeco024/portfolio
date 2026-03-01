import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/Header";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Xand | Criador de sistemas digitais e fisicos",
  description:
    "Portfolio de Gabriel Bravo. Desenvolvimento web, automacao e construcoes fisicas.",
  keywords: [
    "portfolio",
    "desenvolvedor",
    "sistemas",
    "automacao",
    "Xand",
    "Gabriel Bravo",
  ],
  authors: [{ name: "Gabriel Bravo" }],
  openGraph: {
    title: "Xand | Criador de sistemas digitais e fisicos",
    description: "Portfolio de Gabriel Bravo.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider>
          <Header />
          <main className="pt-16">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
