import { Inter } from "next/font/google"
import "./globals.css"

import { Suspense } from "react"
import { ClerkProvider } from "@clerk/nextjs"

import CommonLayout from "@/components/common-layout"
import Loading from "@/app/loading"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "StartupHire",
  description: "This is a Joob Posting nd searching plateform",
}

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Suspense fallback={<Loading />}>
            <CommonLayout>{children}</CommonLayout>
          </Suspense>
        </body>
      </html>
    </ClerkProvider>
  )
}
