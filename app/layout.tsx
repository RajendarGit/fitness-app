import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Providers } from "@/components/providers"
import { oswald, roboto } from "@/fonts"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "FitZone - Your Ultimate Gym Experience",
  description: "Transform your fitness journey with FitZone",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${oswald.className} ${roboto.className}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
