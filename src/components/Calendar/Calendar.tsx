import Day from "../Day/Day";
import {days} from "../../App.tsx";

import "./Calendar.css";
import React, {createContext, useState} from "react";
import DayType from "../DayType/DayType.tsx";

interface CalendarProps {
    dates: number[];
}
export enum Color {
    Holiday = "#e89f45",
    Work = "#ea1b49",
    Errand = "#2437be",
    Sick = "#575920",
    None = "",
}

export type KeyofColor = keyof typeof Color;

export const DayTypeContext = createContext({
    dayType: "None" as KeyofColor,
    setDayType: null as  React.Dispatch<React.SetStateAction<KeyofColor>> | null,
});



export default function Calendar({ dates }: CalendarProps) {
    const [dayType, setDayType] = useState("None" as KeyofColor);
    return (
        <DayTypeContext.Provider value={{dayType, setDayType}}>

            <div className="day-types">
                <DayType dayType="Holiday" />
                <DayType dayType="Work" />
                <DayType dayType="Errand" />
                <DayType dayType="Sick" />
            </div>

            <div className="calendar">
                {
                    dates.map(date =>
                        <Day key={"day-" + date} dayName={days[date % 7]?.name} dayNumber={date}/>)
                }
            </div>
        </DayTypeContext.Provider>

    );
}
