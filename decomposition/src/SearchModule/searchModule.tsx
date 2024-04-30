import SearchFilter from "./searchFilter.tsx";
import './searchModule.css'

/**
 * Component draw logo, search form, search filters and hint for search
 * @constructor
 */

export default function SearchModule() {
    const randomText: string = "random text"

    return (
        <div className="searchModule">
            <div className="searchFiltersList mainPadding">
                <SearchFilter name="Filter"></SearchFilter>
                <SearchFilter name="Filter"></SearchFilter>
                <SearchFilter name="Filter"></SearchFilter>
                <SearchFilter name="Filter"></SearchFilter>
            </div>
            <div className="logoAndSearchForm">
                <span className="logo">Яндекс</span>
                <form className="searchForm">
                    <input className="searchInput"/>
                    <button type="submit" className="searchFormBtn" onClick={(e) => e.preventDefault()}>Найти</button>
                </form>
            </div>
            <span className="underFormText mainPadding">Найдётся всё. Например,</span>
            <span className="randomText"> {randomText}</span>
        </div>
    )
}