"use client"

import { useState } from "react"
import CommonCard from "../common-card"
import JobIcon from "../job-icon"
import { Button } from "../ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { createJobApplicationAction } from "@/actions"

function CandidateJobCard({ jobItem, profileInfo, jobApplications }) {
  const [showJobDetailsDrawer, setShowJobDetailsDrawer] = useState(false)

  async function handlejobApply() {
    if (!profileInfo?.isPremiumUser && jobApplications.length >= 2) {
      setShowJobDetailsDrawer(false)
      toast({
        variant: "destructive",
        title: "You can apply max 2 jobs.",
        description: "Please opt for membership to apply for more jobs",
      })
      return
    }

    await createJobApplicationAction(
      {
        recruiterUserID: jobItem?.recruiterId,
        name: profileInfo?.candidateInfo?.name,
        email: profileInfo?.email,
        candidateUserID: profileInfo?.userId,
        status: ["Applied"],
        jobID: jobItem?._id,
        jobAppliedDate: new Date().toLocaleDateString(),
      },
      "/jobs"
    )
    setShowJobDetailsDrawer(false)
  }

  console.log(
    "CandidateJC",
    "JobItem",
    jobItem,
    "ProfileInfo",
    profileInfo,
    "JobApplications",
    jobApplications
  )

  return (
    <div>
      <Drawer
        open={showJobDetailsDrawer}
        onOpenChange={setShowJobDetailsDrawer}
      >
        <CommonCard
          icon={<JobIcon />}
          title={jobItem?.title}
          description={jobItem?.companyName}
          footerContent={
            <Button
              onClick={() => setShowJobDetailsDrawer(true)}
              className=" dark:bg-[#fffa27] flex h-11 items-center justify-center px-5"
            >
              View Details
            </Button>
          }
        />
        <DrawerContent className="pb-11">
          <DrawerHeader>
            <div className="flex justify-between">
              <DrawerTitle className="text-3xl font-bold ">
                {jobItem?.title}
              </DrawerTitle>
              <div className="flex gap-3">
                <Button
                  onClick={handlejobApply}
                  disabled={
                    jobApplications.findIndex(
                      (item) => item.jobID === jobItem?._id
                    ) > -1
                      ? true
                      : false
                  }
                  className="disabled:opacity-65 "
                >
                  {jobApplications.findIndex(
                    (item) => item.jobID === jobItem?._id
                  ) > -1
                    ? "Applied"
                    : "Apply"}
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setShowJobDetailsDrawer(false)}
                >
                  Cancle
                </Button>
              </div>
            </div>
          </DrawerHeader>
          <div className="px-5">
            <DrawerDescription className="text-2xl  dark:text-white  font-medium text-gray-600">
              {jobItem?.description},
              <span className="text-xl dark:text-white  ml-4 font-normal text-gray-500">
                {jobItem?.location}
              </span>
            </DrawerDescription>
            <div className="w-[150px] mt-6  px-2 flex justify-center dark:bg-white  items-center h-[40px] bg-black rounded-[4px]">
              <h2 className="text-xl font-bold dark:text-black  text-white">
                {jobItem?.type}
              </h2>
            </div>
            <h3 className="text-2xl mt-6 font-medium text-black ">
              Experience: {jobItem?.experience} year
            </h3>
            <div className="flex gap-4 mt-3">
              {jobItem?.skills.split(",").map((skillItem) => (
                <div
                  key={skillItem.index}
                  className="w-[100px] flex justify-center items-center h-[35px] dark:bg-white  bg-black rounded-[4px]"
                >
                  <h2 className="text-[13px] font-medium text-white dark:text-black ">
                    {skillItem}
                  </h2>
                </div>
              ))}
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  )
}

export default CandidateJobCard
