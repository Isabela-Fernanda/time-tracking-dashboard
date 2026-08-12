import jeremyImage from "../../assets/images/image-jeremy.png"
import type { Period } from "../../types/activity.ts"

type UserProfileProps = {
    period: Period
    onChangePeriod: (p: Period) => void
}

export function UserProfile({ period, onChangePeriod }: UserProfileProps) {
    return (
        <section className="mx-6 mt-20 rounded-xl bg-navy-900 xl:mx-0 xl:my-0">
            <div className="flex items-center rounded-lg bg-purple-600 p-8 xl:flex-col xl:items-start xl:p-7">
                <img src={jeremyImage} alt="Jeremy Robson" className="w-18 h-18 border-3 border-white rounded-full xl:w-21 xl:h-21 xl:mt-2" />
                <div className=" rounded-xl ml-3.5 xl:mt-10 xl:ml-1">
                    <p className="font-light text-navy-200 text-sm">Report for</p>
                    <h1 className="text-white text-xl xl:mt-0 xl:text-4xl xl:leading-12.5 xl:mb-12">Jeremy Robson</h1>
                </div>
            </div>
            <nav className="flex justify-between px-8.5 py-5 text-purple-500 text-lg xl:flex-col xl:py-6">
                <button onClick={() => onChangePeriod("daily")} className={`transition-colors duration-150 hover:text-white cursor-pointer ${period === "daily" ? "text-white" : ""
                    } xl:text-left`}>Daily</button>
                <button onClick={() => onChangePeriod("weekly")} className={`transition-colors duration-150 hover:text-white hover:scale-105 cursor-pointer ${period === "weekly" ? "text-white" : ""
                    }xl:mt-3.5 xl:text-left`}>Weekly</button>
                <button onClick={() => onChangePeriod("monthly")} className={`transition-colors duration-150 hover:text-white cursor-pointer ${period === "monthly" ? "text-white" : ""
                    } xl:mt-3.5 xl:mb-1 xl:text-left`}>Monthly</button>
            </nav>
        </section>
    )
}
