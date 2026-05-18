import React from "react";

const NewsCard = (props) => {
  return (
    <div>
      <br></br>
      <div key={props.newsStory.id}>
        <div>
          <a
            href={props.newsStory.url}
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              alt={props.newsStory.headline}
              src={props.newsStory.image}
              className="newsThumnail"
            />
          </a>
        </div>
        <div>
          <div className="newsThumbnailText ">
            {props.newsStory.headline}
            <i />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
