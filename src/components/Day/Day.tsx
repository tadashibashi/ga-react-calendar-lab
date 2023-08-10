import "./Day.css";

interface DayProps {
    dayName: string;
    dayNumber: number;
}

export default function Day({dayName, dayNumber}: DayProps) {
    return (
        <div className="Day">
            <span>{dayName}</span>
            <span>{dayNumber}</span>
        </div>
    )
}