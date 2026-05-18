import React from "react";
import NewsCard from "./NewsCard";

const NewsList = ({ news }) => (
  <div className="newsList">
    {news && news.map((story) => (
      <NewsCard key={story.id} newsStory={story} />
    ))}
  </div>
);

export default NewsList;
