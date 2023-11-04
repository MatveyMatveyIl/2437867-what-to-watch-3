import {Tab} from "../../consts.ts";
import {useState} from "react";
import cn from 'classnames';
import {Film} from "../../types/types.ts";
import MovieOverview from "../movie/movie-overview.tsx";
import MovieDetails from "../movie/movie-details.tsx";
import MovieReviews from "../movie/movie-reviews.tsx";

type TabsProps = {
  film: Film
}

function Tabs(props: TabsProps) {
  const [currentTab, setCurrentTab] = useState(Tab.Overview);

  const setTab = () => {
    switch (currentTab) {
      case Tab.Details:
        return <MovieDetails film={props.film}/>
      case Tab.Overview:
        return <MovieOverview film={props.film}/>
      case Tab.Reviews:
        return <MovieReviews reviews={[]}/>
    }
  }


  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className={cn("film-nav__item", {'film-nav__item--active': currentTab === Tab.Overview})}>
            <a className="film-nav__link" onClick={() => setCurrentTab(Tab.Overview)}>Overview</a>
          </li>
          <li className={cn("film-nav__item", {'film-nav__item--active': currentTab === Tab.Details})}>
            <a className="film-nav__link" onClick={() => setCurrentTab(Tab.Details)}>Details</a>
          </li>
          <li className={cn("film-nav__item", {'film-nav__item--active': currentTab === Tab.Reviews})}>
            <a className="film-nav__link" onClick={() => setCurrentTab(Tab.Reviews)}>Reviews</a>
          </li>
        </ul>
      </nav>
      {setTab()}
    </div>
  );
}

export default Tabs;