import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "HomeWiz - Satu Aplikasi, Semua Kebutuhan Properti Terpenuhi!",
  description:
    "HomeWiz adalah solusi pintar untuk pengelola dan penghuni apartemen. Dapatkan akses cepat untuk komunikasi dan data, semua properti dalam satu sistem.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body className={inter.className}>{children}</body>
    </html>
  )
}



import './globals.css'