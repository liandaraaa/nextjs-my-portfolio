import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Portfolio - Android And Web Frontend Engineer",
  description:
    "Professional portfolio showcasing Android and Web Frontend development skills, projects, and experience.",
  keywords: ["Android Developer", "Frontend Engineer", "React", "Next.js", "Kotlin", "Portfolio"],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Portfolio - Android And Web Frontend Engineer",
    description: "Professional portfolio showcasing Android and Web Frontend development skills",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
