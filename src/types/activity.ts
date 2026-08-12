export type ActivityTitle = | "Work" | "Play" | "Study" | "Exercise" | "Social" | "Self Care";

export type Period = "daily" | "weekly" | "monthly";

export type Timeframe = {
    current: number;
    previous: number;
};

export type Activity = {
    title: ActivityTitle;
    timeframes: Record<Period, Timeframe>;
};