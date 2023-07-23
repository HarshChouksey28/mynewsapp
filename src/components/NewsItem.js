import React from "react";

const NewsItem =(props)=> {
  
    let { title, description, imageurl, newsurl, author, date, source } =
      props;

    return (
      <div>
        <div className="card">
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              position: "absolute",
              right: "0",
            }}
          >
            <span className=" badge rounded-pill bg-danger">{source}</span>
          </div>
          <img
            src={
              !imageurl
                ? "https://img.etimg.com/thumb/msid-100821501,width-1070,height-580,imgsize-95072,overlay-etmarkets/photo.jpg"
                : imageurl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title} ...</h5>
            <p className="card-text">{description} ...</p>
            <p className="card-text">
              <small className="text-body-secondary">
                <strong>By-</strong>
                {!author ? "unknown" : author} <strong>on</strong>{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a href={newsurl} target="blank" className="btn btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }


export default NewsItem;
