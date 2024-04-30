import './css/streamItem.css'

type Props = {
    name: string,
    topic: string
}

/**
 * Component for list of streams in InfoCard body
 * @param name name or author of stream
 * @param topic stream topic
 * @constructor
 */

export default function StreamItem({name, topic}: Props) {
    return (
        <div className="streamItem">
            <button className="playStreamBtn"/>
            <span className="nameStream">{name}</span>
            <span className="topicStream">{topic}</span>
        </div>
    )
}