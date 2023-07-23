import React, { useEffect,useState} from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
const News=(props)=> {
  const [articles,setArticles]=useState([])
  const [loading,setLoading]=useState(true)
  const [page,setPage]=useState(1)
  const [totalresults,setTotalresults]=useState(0)
  
    
  
  const updatenews=async()=> {
    props.setprogress(0);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey} &page=${page + 1}&pagesize=${props.pagesize}`;
    setLoading(true)
    let data = await fetch(url);
    props.setprogress(50);
    let parseddata = await data.json();
   
    setArticles(parseddata.articles)
    setLoading(false)
    setTotalresults(parseddata.totalResults)
    props.setprogress(100);
  }
  useEffect(() => {
    
    document.title =` ${props.category}-"newsmonkey"`;
    updatenews();
    
    
}, [])
  
  
  
  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${
      props.category
    }&apiKey=${props.apiKey}&page=${
      page+ 1
    }&pagesize=${props.pagesize}`;
    
    setPage(page + 1 );
    let data = await fetch(url);
    let parseddata = await data.json();
    
    setLoading(false)
    setTotalresults(parseddata.totalResults)
    setArticles(articles.concat(parseddata.articles))
  };
  
    return (
      <>
        <div className="conatiner my-3">
          <h1 className="text-center my-5">
            News monkey TOP headlines on {props.category}
          </h1>
          {loading&&<Spinner/>}
          <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={articles.length !== totalresults}
            loader={<Spinner />}
          >
            <div className="container">
              <div className="row">
                
                {articles.map((element) => {
                  return (
                    <div className="col-md-4 my-4" key={element.url}>
                      <NewsItem
                        title={element.title ? element.title.slice(0, 80) : ""}
                        description={
                          element.description
                            ? element.description.slice(0, 80)
                            : ""
                        }
                        imageurl={element.urlToImage}
                        newsurl={element.url}
                        author={element.author}
                        date={element.publishedAt}
                        source={element.source.name}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </InfiniteScroll>
          
        </div>
      </>
    );
  
}
News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
