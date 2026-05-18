import React from "react";

const NewsCard = ({ newsStory }) => (
  <a
    className="newsCard"
    href={newsStory.url}
    rel="noopener noreferrer"
    target="_blank"
  >
    <img
      alt={newsStory.headline}
      src={newsStory.image}
      className="newsCardImage"
    />
    <span className="newsCardHeadline">{newsStory.headline}</span>
  </a>
);

export default NewsCard;
