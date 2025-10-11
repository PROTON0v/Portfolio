import { ReactNode } from "react";
import Header from "@/components/layout/Header";
import { Outfit, Inter } from 'next/font/google'
import "@/styles/global.css";
import { ThemeProvider } from "@/styles/theme-provider";

export const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-outfit',
})

export const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
})

export default function RootLayout({
    children,
  }: {
    children: ReactNode
  }) {
    return (
      <html 
      lang="en" 
      suppressHydrationWarning
      className={`${outfit.variable} ${inter.variable} `}>
        <body className="scroll-bar">
          <ThemeProvider>
            <Header />
            {children}
          </ThemeProvider>
        </body>
      </html>
    )
  }