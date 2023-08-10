import React, {useContext, useState} from "react";
import {KeyofColor, Color, DayTypeContext} from "../Calendar/Calendar.tsx";

import "./Day.css";

interface DayProps {
    dayName: string;
    dayNumber: number;
}

export default function Day({dayName, dayNumber}: DayProps) {

    const [dayType, setDayType] = useState("None" as KeyofColor);
    const context = useContext(DayTypeContext);

    function handleClick(e: React.MouseEvent) {
        setDayType(context.dayType);
    }

    const style = {
        background: Color[dayType],
    };

    return (
        <div onClick={handleClick} className="Day" style={style}>
            <span>{dayName}</span>
            <span>{dayNumber}</span>
        </div>
    );
}