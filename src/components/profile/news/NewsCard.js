import React from "react";

const NewsCard = (props) => {
  return (
    <div>
      <br></br>
      <div key={props.newsStory.id}>
        <div>
          <a href={props.newsStory.news_url}>
            <img
              alt={props.newsStory.title}
              src={props.newsStory.image_url}
              className="newsThumnail"
              target="_blank"
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
