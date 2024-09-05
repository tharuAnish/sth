import { currentUser } from "@clerk/nextjs/server"

import Header from "../header"
import { fetchProfileAction } from "@/actions"

export default async function CommonLayout({ children }) {
  const user = await currentUser()
  const profileInfo = await fetchProfileAction(user?.id)

  return (
    <div className="mx-auto max-w-7xl p-6">
      <main>
        <Header
          profileInfo={profileInfo}
          user={JSON.parse(JSON.stringify(user))}
        />
        {children}
      </main>
    </div>
  )
}
