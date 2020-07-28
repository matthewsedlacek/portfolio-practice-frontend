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
          <div>{/* <small>{props.stock.sector}</small> */}</div>
        </div>
        <div>
          <span>
            {/* <i />$
            {props.stockPrice
              ? props.stockPrice[props.stockPrice.length - 1].current_price
              : ""} */}
          </span>
          <div>
            <span>
              <i />
              {/* Daily Change:
              {props.stockPrice
                ? props.stockPrice[props.stockPrice.length - 1].dollar_change
                : ""}{" "}
              {props.stockPrice
                ? props.stockPrice[props.stockPrice.length - 1].percent_change
                : ""} */}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
