import { currentUser } from "@clerk/nextjs/server"

import JobListing from "@/components/job-listing"
import { fetchJobsForRecruiterAction, fetchProfileAction } from "@/actions"

export default async function Jobs() {
  const user = await currentUser()
  const profileInfo = await fetchProfileAction(user?.id)

  const jobList = await fetchJobsForRecruiterAction(user?._id)

  console.log("PostedJobList", jobList)

  return (
    <div>
      <JobListing
        use={JSON.parse(JSON.stringify(user))}
        profileInfo={profileInfo}
        jobList={jobList}
      />
    </div>
  )
}
