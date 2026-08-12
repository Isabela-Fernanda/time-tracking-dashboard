import type { ActivityData } from "../../data/activities.ts"
import type { Period } from "../../types/activity.ts"

import EllipsisIcon from "../../assets/images/icon-ellipsis.svg"

type TimeCardProps = {
    activity: ActivityData;
    period: Period;
}

const previousPeriodLabel: Record<Period, string> = {
    daily: "Yesterday",
    weekly: "Last Week",
    monthly: "Last Month",
}

export function TimeCard({ activity, period }: TimeCardProps) {
    const timeframe = activity.timeframes[period];

    return (
        <div className={`${activity.color} mx-6 mt-6 h-40 relative rounded-xl overflow-hidden transition-[filter] duration-200 hover:brightness-120 cursor-pointer xl:mx-0 xl:mt-0 xl:h-61`}>
            <img src={activity.icon} alt="" className="absolute right-5 -top-3 w-18" />
            <div className="bg-navy-900 absolute bottom-0 w-full rounded-xl flex flex-col px-8.5 py-5 xl:px-7.5">
                <div className="flex justify-between items-center mt-2 xl:mb-5.5">
                    <h2 className="text-white font-medium text-lg">{activity.title}</h2>
                    <button aria-label="More options" className="opacity-70 hover:opacity-100 transition-opacity duration-150 cursor-pointer"><img src={EllipsisIcon} alt=""/></button>
                    
                </div>
                <div className="flex justify-between items-center mb-2 xl:flex-col xl:items-start">
                    <p className="text-white font-light text-4xl xl:text-6xl xl:mb-3">{timeframe.current}hrs</p>
                    <p className="text-navy-200 font-light text-sm xl:mb-1 xl:font-medium">{previousPeriodLabel[period]} - {timeframe.previous}hrs</p>
                </div>
            </div>
        </div>
    )
}

