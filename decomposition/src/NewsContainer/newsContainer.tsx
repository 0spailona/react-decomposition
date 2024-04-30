import {Component} from "react";
import NewsFilter from "./newsFilter.tsx";
import './css/newsContainer.css'
import News from "./news.tsx";
import Course from "./course.tsx";
import dateFormat from "dateformat";

/**
 * Main component for news.
 * Contain filters, list, currency module and module with new component in cite
 */

class NewsContainer extends Component {

    state = {
        filter: "all"
    }

    onClick(filter: string) {
        console.log('onClick', filter)
        if (this.state.filter !== filter) {
            this.setState({filter})
        }
    }

    render() {
        return (
            <div className="newsContainer">
                <div className="headerNewsContain mainPadding">
                    {[{
                        text: "Сейчас в СМИ",
                        link: "#",
                        onClick: this.onClick.bind(this),
                        filter: "all",
                        active: this.state.filter === "all"
                    },
                        {
                            text: "в Германии",
                            link: "#",
                            onClick: this.onClick.bind(this),
                            filter: "country",
                            active: this.state.filter === "country"
                        },
                        {
                            text: "Рекомендации",
                            link: "#",
                            onClick: this.onClick.bind(this),
                            filter: "recommended",
                            active: this.state.filter === "recommended"
                        }].map((x, i) =>
                        <NewsFilter key={i} {...x}></NewsFilter>)}
                    <span className="date">{dateFormat(new Date(), "dd mmmm, dddd HH MM").toString()}</span>
                </div>
                <div className="newsList">
                    {[{link: "#", text: "text 1", iconSrc: null},
                        {link: "#", text: "text 2", iconSrc: null},
                        {link: "#", text: "text 3", iconSrc: null}].map((x, i) => <News key={i} {...x}></News>)}
                </div>
                <div className="courses mainPadding">
                    {[{name: "name name", now: 30, progress: 95},
                        {name: "name name", now: 30, progress: 95},
                        {name: "name name", now: 30, progress: 95},].map((x, i) =>
                        <Course key={i} {...x}></Course>)
                    }
                </div>
            </div>
        )
    }
}

export default NewsContainer