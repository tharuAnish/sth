import { Inter } from "next/font/google"
import "./globals.css"

import { Suspense } from "react"
import { ClerkProvider } from "@clerk/nextjs"

import CommonLayout from "@/components/common-layout"
import Loading from "@/app/loading"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "StartupHire",
  description:
    " JobSearchPro is a cutting-edge platform designed to streamline the job search and recruitment process. Job seekers can easily explore a vast array of job opportunities, filter positions by industry, location, and experience level, and apply with just a few clicks. Employers can post job openings, manage applications, and find the perfect candidates using advanced search and filtering tools. Our user-friendly interface, personalized job alerts, and comprehensive support resources make JobSearchPro the ideal solution for both job seekers and employers seeking to connect efficiently in today's dynamic job market.",
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
