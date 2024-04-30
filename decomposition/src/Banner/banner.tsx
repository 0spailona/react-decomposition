type Props = {
    link: string,
    imageSrc: string,
    alt: string | null
}

/**
 * Banner component
 * @param link link to advertised site
 * @param imageSrc banner image URL
 * @param alt banner image alt text
 * @constructor
 */
export default function Banner({link, imageSrc, alt}: Props) {
    if (!link || !imageSrc) return
    return (
        <div className="bannerWrp mainPadding">
            <a href={link}>
                <img src={imageSrc} alt={alt ? alt : "banner"} className="banner"/>
            </a>
        </div>

    )
}