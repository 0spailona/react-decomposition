import './css/tvItem.css'

type Props = {
    time: string,
    name: string,
    canal: string
}

/**
 * Component for list of Program TV for InfoCard body
 * @param time start program
 * @param name name program
 * @param canal canal name
 * @constructor
 */

export default function TVItem({time, name, canal}: Props) {
    return (
        <div className="tvItem">
            <span className="time">{time}</span>
            <span className="name">{name}</span>
            <span className="canal">{canal}</span>
        </div>
    )
}