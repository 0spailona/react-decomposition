import './css/module.css'

type Props = {
    src: string | null,
    title: string,
    text: string
}

/**
 * Module draw new in cite
 * @param src src of image for module
 * @param title title if module
 * @param text description of news
 * @constructor
 */

export default function Module({src, title, text}: Props) {
    return (
        <a className="module">
            <img className="moduleImage" src={src ? src : "/circle-question-regular.svg"} alt="Module picture"/>
            <span className="moduleTitle">{title}</span>
            <span className="moduleText">{text}</span>
        </a>
    )
}