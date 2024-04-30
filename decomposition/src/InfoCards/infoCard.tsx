import {ReactNode} from "react";
import './css/infoCard.css'

type Props = {
    title: string,
    banner?: { source: string, name: string }
    children?: ReactNode
}

/**
 * Component for draw information card
 * @param title card title
 * @param banner option param, mini-banner for title
 * @param children card body
 * @constructor
 */

export default function InfoCard({title, banner, children}: Props) {
    return (
        <div className="infoCard">
            <div className="cardHeader">
                <h3 className="cardTitle">{title}</h3>
                {banner ? <img className="cardBanner" src={banner.source} alt={banner.name}/> : null}
            </div>
            {children}
        </div>
    )
}