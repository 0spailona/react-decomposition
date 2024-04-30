type Props = {
    name: string
}

/**
 * Component draw filter for searching
 * @param name
 * @constructor
 */

export default function SearchFilter({name}: Props) {
    return (
        <span className="searchFilter">{name}</span>
    )
}