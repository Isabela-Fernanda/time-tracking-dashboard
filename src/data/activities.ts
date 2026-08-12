import data from "./data.json";
import { activityConfig } from "./activityConfig.ts";
import type { Activity, ActivityTitle } from "../types/activity.ts";

export type ActivityData = Activity & {
    icon: string;
    color: string;
}

export const activities: ActivityData[] = data.map((activity) => {
    const title = activity.title as ActivityTitle;

    return {
        ...activity,
        title,
        icon: activityConfig[title].icon,
        color: activityConfig[title].color,
    }
});
