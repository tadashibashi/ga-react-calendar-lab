import {useContext} from "react";
import {DayTypeContext, Color, KeyofColor} from "../Calendar/Calendar";

import "./DayType.css";


interface DayTypeProps {
    dayType: KeyofColor;
}

export default function DayType({dayType}: DayTypeProps) {
    const {dayType: curDayType, setDayType} = useContext(DayTypeContext);

    const style = {
        background: Color[dayType],
    };

    const isActive = curDayType === dayType;

    return (
        <div className={"DayType" + (isActive ? " active" : "")}
             style={style}
             onClick={() => setDayType && setDayType(dayType)}>

            <h4>{dayType}</h4>
        </div>
    );
}