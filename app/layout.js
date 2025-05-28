import "./globals.css"
import { Geist, Geist_Mono } from "next/font/google"
import { ThemeProvider } from "./components/themeprovider"
import { ModeToggle } from "./components/mode"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata = {
  title: "Sameer | Full-Stack Developer",
  description: "Welcome to Sameer's portfolio – a showcase of modern web development projects built using Next.js, React, and cutting-edge technologies.",
  icons:{
    icon : "/images/Sameer.jpg"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="border-2 rounded-4xl fixed top-8 left-4 z-50">
            <ModeToggle />
          </div>

          <main className="min-h-screen">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
