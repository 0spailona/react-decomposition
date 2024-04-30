type Props = {
    text: string,
    link: string,
    filter: string,
    onClick: Function,
    active: boolean
}

/**
 * Component for drawing news filter
 * @param text
 * @param link
 * @param filter
 * @param onClick
 * @param active
 * @constructor
 */

export default function NewsFilter({text, link, filter, onClick, active}: Props) {
    return (
        <a className={`${active ? "filterLink active" : "filterLink"}`} href={link}
           onClick={() => onClick?.call(null, filter)} data-filter={filter}>{text}</a>
    )
}