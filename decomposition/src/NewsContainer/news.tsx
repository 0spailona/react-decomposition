type Props = {
    iconSrc: string | null,
    text: string,
    link: string,
}

/**
 * News component for list
 * @param iconSrc src for icon
 * @param text text of news
 * @param link url
 * @constructor
 */

export default function News({iconSrc, text, link}: Props) {
    return (
        <div className="news">
            <img className="newsIcon" src={iconSrc ? iconSrc : "../public/yandex-international.svg"} alt="icon"/>
            <a className="newsLink" href={link}>{text}</a>
        </div>
    )
}