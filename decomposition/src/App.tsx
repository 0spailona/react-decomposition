import './App.css'
import NewsContainer from "./NewsContainer/newsContainer.tsx";
import Module from "./NewsContainer/module.tsx";
import SearchModule from "./SearchModule/searchModule.tsx";
import Banner from "./Banner/banner.tsx";
import InfoCard from "./InfoCards/infoCard.tsx";
import VisitedLink from "./InfoCards/VisitedLink.tsx";
import TVItem from "./InfoCards/tvItem.tsx";
import StreamItem from "./InfoCards/streamItem.tsx";

/**
 * Root component
 * @constructor
 */
function App() {

    return (
        <div className="rootContainer">
            <div className="wrp">
                <div className="contain">
                    <div className="newsAndModule">
                        <NewsContainer></NewsContainer>
                        <Module src={null} title="Title Title Title"
                                text="text text text text text text text text"></Module>
                    </div>
                    <SearchModule></SearchModule>
                    <Banner link="#" imageSrc="/img.jpg" alt={null}></Banner>
                    <div className="cardsInfo mainPadding">
                        <InfoCard title="Погода"
                                  children={
                                      <div className="cardBody">
                                          <img src="/circle-question-regular.svg" alt="alt" width="30%"/>
                                          <span> +17</span>
                                          <div>
                                              <div>Утром +17</div>
                                              <div>Днём +17</div>
                                          </div>
                                      </div>
                                  }>
                        </InfoCard>
                        <InfoCard title="Карта Германии"
                                  children={
                                      <div className="cardBody">
                                          <a href="#">Расписание</a>
                                      </div>
                                  }>
                        </InfoCard>
                        <InfoCard title="Посещаемое"
                                  children={
                                      <div className="cardBody inColumn">
                                          {[{cite: "Недвижимость", keywords: "в посёлке", link: "#"},
                                              {cite: "Авто.ru", keywords: "колёса", link: "#"}].map((x, i) =>
                                              <VisitedLink
                                                  key={i} {...x}/>)}
                                      </div>
                                  }>
                        </InfoCard>
                        <InfoCard title="Телепрограмма"
                                  banner={{source: "/img.jpg", name: "name"}}
                                  children={
                                      <div className="cardBody inColumn">
                                          {[{time: "22:00", name: "Name 1", canal: "Canal 1"},
                                              {time: "22:00", name: "Name 2", canal: "Canal 2"},
                                              {time: "22:00", name: "Name 3", canal: "Canal 3"}].map((x, i) => <TVItem
                                              key={i} {...x}/>)}
                                      </div>
                                  }>
                        </InfoCard>
                        <InfoCard title="Эфир"
                                  children={
                                      <div className="cardBody inColumn">
                                          {[{name: "name 1", topic: "topic 1"},
                                              {name: "name 2", topic: "topic 2"},
                                              {name: "name 3", topic: "topic 3"}].map((x, i) =>
                                              <StreamItem key={i} {...x}/>)}
                                      </div>
                                  }>
                        </InfoCard>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
