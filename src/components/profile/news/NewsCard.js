import React from "react";

const NewsCard = (props) => {
  return (
    <div>
      <br></br>
      <div key={props.newsStory.id}>
        <div>
          <a
            href={props.newsStory.news_url}
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              alt={props.newsStory.title}
              src={props.newsStory.image_url}
              className="newsThumnail"
            />
          </a>
        </div>
        <div>
          <div>
            {props.newsStory.title}
            <i />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
