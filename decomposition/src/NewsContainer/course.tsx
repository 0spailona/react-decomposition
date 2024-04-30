import './css/course.css'

type Props = {
    name: string,
    now: number,
    progress: number
}

/**
 * Component for draw currency info
 * @param name name of currency
 * @param now currency now
 * @param progress expected currency
 * @constructor
 */

export default function Course({name, now, progress}: Props) {
    return (
        <div className="course">
            <span className="courseName">{name}</span>
            <span className="courseNow">{now}</span>
            <span className="progressCourse">{progress > 0 ? "+" : ""}{progress}%</span>
        </div>
    )
}