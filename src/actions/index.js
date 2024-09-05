"use server"

import connectToDB from "@/database"
import Job from "@/models/job"
import Profile from "@/models/profile"
import { revalidatePath } from "next/cache"

//create profile action
export async function createProfileAction(formData, pathToRevalidate) {
  await connectToDB()
  await Profile.create(formData)
  revalidatePath(pathToRevalidate)
}

//fetch profile
export async function fetchProfileAction(id) {
  await connectToDB()
  const result = await Profile.findOne({ userId: id })

  return JSON.parse(JSON.stringify(result))
}

//create job action

export async function postNewJobAction(formData, pathToRevalidate) {
  await connectToDB()
  await Job.create(formData)
  revalidatePath(pathToRevalidate)
}

//fetch job action
//recruiter
export async function fetchJobsForRecruiterAction(id) {
  await connectToDB()
  const result = await Job.find({ recruiterId: id })

  return JSON.parse(JSON.stringify(result))
}
//candidate
export async function fetchJobsForCandidateAction(filterParams = {}) {
  await connectToDB()
  let updatedParams = {}
  Object.keys(filterParams).forEach((filterKey) => {
    updatedParams[filterKey] = { $in: filterParams[filterKey].split(",") }
  })
  console.log(updatedParams, "updatedParams")
  const result = await Job.find(
    filterParams && Object.keys(filterParams).length > 0 ? updatedParams : {}
  )

  return JSON.parse(JSON.stringify(result))
}
