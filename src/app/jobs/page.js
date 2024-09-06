import { currentUser } from "@clerk/nextjs/server"

import JobListing from "@/components/job-listing"
import {
  fetchJobApplicationsForCandidate,
  fetchJobApplicationsForRecruiter,
  fetchJobsForCandidateAction,
  fetchJobsForRecruiterAction,
  fetchProfileAction,
} from "@/actions"

export default async function Jobs({ searchParams }) {
  const user = await currentUser()
  const profileInfo = await fetchProfileAction(user?.id)

  const jobList =
    profileInfo?.role === "candidate"
      ? await fetchJobsForCandidateAction(searchParams)
      : await fetchJobsForRecruiterAction(user?.id)

  const getJobApplicationList =
    profileInfo?.role === "candidate"
      ? await fetchJobApplicationsForCandidate(user?.id)
      : await fetchJobApplicationsForRecruiter(user?.id)

  // const fetchFilterCategories = await createFilterCategoryAction();

  console.log("PostedJobList", jobList)
  console.log("Candidate user", user)

  return (
    <div>
      <JobListing
        use={JSON.parse(JSON.stringify(user))}
        profileInfo={profileInfo}
        jobList={jobList}
        jobApplications={getJobApplicationList}
        // filterCategories={fetchFilterCategories}
      />
    </div>
  )
}
