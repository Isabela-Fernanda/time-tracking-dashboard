import { useState } from "react"
import { UserProfile } from "./components/UserProfile/UserProfile"
import { TimeCard } from "./components/TimeCard/TimeCard"

import { activities } from "./data/activities"
import type { Period } from "./types/activity"

function App() {
  const [period, setPeriod] = useState<Period>("daily")

  return (
    <>
      <main className="min-h-screen mb-20 xl:mb-0 xl:grid xl:grid-cols-[255px_1fr] xl:gap-6 xl:max-w-6xl xl:mx-41 xl:items-center">
        <UserProfile period={period} onChangePeriod={setPeriod} />

        <section className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7.5">
          {activities.map((activity) => (
            <TimeCard key={activity.title} activity={activity} period={period} />
          ))}

        </section>
      </main>
    </>
  )
}

export default App
