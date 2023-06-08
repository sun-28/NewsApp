import React , {useEffect, useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';
export default function News(props) {
  const cp=(s)=>
{
    return s[0].toUpperCase() + s.slice(1);
}
    const [page, setpage] = useState(1);
    const [pagesize, setpagesize] = useState(9);
    const [articles, setarticles] = useState([]);
    const [results, setresults] = useState();
    const getdata= async()=>{
      setarticles([]);
      props.setProgress(10)
      let response= await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=96c8ba5d70404330b03f52049974c850&pageSize=${pagesize}&page=${page}`);
      props.setProgress(30)
      let data=await response.json();
      props.setProgress(70)
      setarticles(data.articles);
      props.setProgress(100)
      setresults(data.totalResults);
    }
    const fetchMoreData = async () => {
      let response= await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=96c8ba5d70404330b03f52049974c850&pageSize=${pagesize}&page=${page+1}`);
      let data=await response.json();
      setarticles(articles.concat(data.articles));
      setpage(page+1)
    };
    useEffect(() => {
      getdata()
    },[])
   return (
    <>
    <h2 className='text-center ' style={{color: '#ffc107', marginTop: '90px'}}>Top {cp(props.category)} HeadLines</h2> 
    <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!=results}
          loader={<Spinner/>}
          >
      <div className='container my-3'>
        <div className='row'>
          {articles.map((element)=>{
            return <div key={element.url} className="col-md-4 my-3">
              <NewsItem headline={element.title} news={element.description} ImageUrl={element.urlToImage} url={element.url}/>
              </div>    
          })}
          </div>

      </div>
          </InfiniteScroll>
          </>
  )
}
