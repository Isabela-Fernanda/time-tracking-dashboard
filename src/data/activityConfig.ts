import WorkIcon from "../assets/images/icon-work.svg";
import PlayIcon from "../assets/images/icon-play.svg";
import StudyIcon from "../assets/images/icon-study.svg";
import ExerciseIcon from "../assets/images/icon-exercise.svg";
import SocialIcon from "../assets/images/icon-social.svg";
import SelfCareIcon from "../assets/images/icon-self-care.svg";

import type { ActivityTitle } from "../types/activity.ts"

type ActivityConfig = {
    icon: string;
    color: string;
}

export const activityConfig: Record<ActivityTitle, ActivityConfig> = {
    Work: {
        icon: WorkIcon,
        color: "bg-orange-300",
    },
    Play: {
        icon: PlayIcon,
        color: "bg-blue-300",
    },
    Study: {
        icon: StudyIcon,
        color: "bg-pink-400",
    },
    Exercise: {
        icon: ExerciseIcon,
        color: "bg-green-400",
    },
    Social: {
        icon: SocialIcon,
        color: "bg-purple-700",
    },
    "Self Care": {
        icon: SelfCareIcon,
        color: "bg-yellow-300",
    },
};