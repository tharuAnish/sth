"use client"

import CommonCard from "../common-card"
import JobIcon from "../job-icon"
import { Button } from "../ui/button"

export default function CandidateJobCard({ jobItem }) {
  return (
    <div>
      <CommonCard
        icon={<JobIcon />}
        title={jobItem?.title}
        description={jobItem?.companyName}
        footerContent={
          <Button
            //   onClick={() => setShowJobDetailsDrawer(true)}
            className=" dark:bg-[#fffa27] flex h-11 items-center justify-center px-5"
          >
            View Details
          </Button>
        }
      />
    </div>
  )
}
