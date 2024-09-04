"use client"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TabsContent } from "@radix-ui/react-tabs"
import { useEffect, useState } from "react"
import CommonForm from "../common-form"
import {
  candidateOnboardFormControls,
  initialCandidateFormData,
  initialRecruiterFormData,
  recruiterOnboardFormControls,
} from "@/utils"
import { useUser } from "@clerk/nextjs"
// import { createProfileAction } from "@/actions";
// import { createClient } from "@supabase/supabase-js";

export default function OnBoard() {
  const [currentTab, setCurrentTab] = useState("candidate")
  const [recruiterFormData, setRecruiterFormData] = useState(
    initialRecruiterFormData
  )
  const [candidateFormData, setCandidateFormData] = useState(
    initialCandidateFormData
  )

  function handleTabChange(value) {
    setCurrentTab(value)
  }

  return (
    <div className="bg-white">
      <Tabs value={currentTab} onValueChange={handleTabChange}>
        <div className="w-full">
          <div className="flex items-baseline justify-between border-b pb-6 pt-24">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              Welcome to onboarding
            </h1>
            <TabsList>
              <TabsTrigger value="candidate">Candidate</TabsTrigger>
              <TabsTrigger value="recruiter">Recruiter</TabsTrigger>
            </TabsList>
          </div>
        </div>
        <TabsContent value="candidate">
          <CommonForm
            // action={createProfile}
            formData={candidateFormData}
            setFormData={setCandidateFormData}
            formControls={candidateOnboardFormControls}
            buttonText={"Onboard as candidate"}
            // handleFileChange={handleFileChange}
            // isBtnDisabled={!handleCandidateFormValid()}
          />
        </TabsContent>
        <TabsContent value="recruiter">
          <CommonForm
            formControls={recruiterOnboardFormControls}
            buttonText={"Onboard as recruiter"}
            formData={recruiterFormData}
            setFormData={setRecruiterFormData}
            // isBtnDisabled={!handleRecuiterFormValid()}
            // action={createProfile}
          />
        </TabsContent>
      </Tabs>
    </div>
  )
}
