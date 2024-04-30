type Props = {
    cite: string,
    keywords: string,
    link: string
}

/**
 * Component for list of VisitedLinks in InfoCard body
 * @param cite name of cite
 * @param keywords search keywords
 * @param link url of page
 * @constructor
 */

export default function VisitedLink({cite, keywords, link}: Props) {

    return (
        <a href={link} className="visitedLinkWrp">
            <strong className="citeName">{cite}</strong>
            <span className="searchedWords"> - {keywords}</span>
        </a>
    )
}