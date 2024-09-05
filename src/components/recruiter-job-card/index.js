import CommonCard from "../common-card"
import JobIcon from "../job-icon"
import { Button } from "../ui/button"

export default function RecruiterJobCard({ jobItem }) {
  return (
    <div>
      <CommonCard
        icon={<JobIcon />}
        title={jobItem?.title}
        description={jobItem?.description}
        footerContent={<Button>11 Applicants</Button>}
      />
    </div>
  )
}
