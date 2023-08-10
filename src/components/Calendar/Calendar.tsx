import Day from "../Day/Day";
import {days} from "../../App.tsx";

import "./Calendar.css";

interface CalendarProps {
    dates: number[];
}

export default function Calendar({ dates }: CalendarProps) {

    return (
        <div className="Calendar">
            {
                dates.map(date =>
                    <Day key={"day-" + date} dayName={days[date % 7]?.name} dayNumber={date}/>)
            }
        </div>
    );
}
