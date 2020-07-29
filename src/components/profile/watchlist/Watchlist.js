import React, { Fragment } from "react";
import NewsCard from "./NewsCard";

const Watchlist = (props) => {
  const renderNews = () => {
    return props.news.map((singleNews) => {
      return <NewsCard newsStory={singleNews} />;
    });
  };

  return (
    <Fragment>
      <div className="profileContainer">
        <table>
          <tbody>{props.news && renderNews()}</tbody>
        </table>
      </div>
    </Fragment>
  );
};

export default Watchlist;
