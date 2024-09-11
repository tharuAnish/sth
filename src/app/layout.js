import { Inter } from "next/font/google"
import "./globals.css"

import { Suspense } from "react"
import { ClerkProvider } from "@clerk/nextjs"

import CommonLayout from "@/components/common-layout"
import Loading from "@/app/loading"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "StartupHire - Innovative Job Search and Recruitment Platform",
  description:
    "StartupHire is a state-of-the-art platform designed to revolutionize the job search and recruitment process. Discover a wide range of job opportunities, filter by industry, location, and experience, and apply with ease. Employers can post jobs, manage applications, and find ideal candidates using advanced tools. Enjoy a user-friendly interface, personalized alerts, and comprehensive support for both job seekers and employers.",
  keywords:
    "job search, recruitment, employment, job opportunities, job seekers, employers, job applications",
  author: "StartupHire Team",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1.0",
  og: {
    title: "StartupHire - Innovative Job Search and Recruitment Platform",
    description:
      "Explore StartupHire, a cutting-edge platform for job seekers and employers. Find and post job openings with advanced search features and a user-friendly interface.",
    // url: "https://www.startuphiredomain.com", // Replace with your actual URL
    // image: "https://www.startuphiredomain.com/og-image.jpg", // Replace with your actual image URL
    site_name: "StartupHire",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@StartupHire",
    title: "StartupHire - Innovative Job Search and Recruitment Platform",
    description:
      "Discover StartupHire, your go-to platform for finding and posting job opportunities with ease. Perfect for job seekers and employers alike.",
    // image: "https://www.startuphiredomain.com/twitter-image.jpg", // Replace with your actual image URL
  },
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
