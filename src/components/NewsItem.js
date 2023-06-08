import React from 'react'
import spin from './Spinner-1s-200px.gif'
export default function NewsItem(props) {
  return (
    <div className="card" >

      {props.ImageUrl?<img className="card-img-top" src={props.ImageUrl} alt={spin} />:<img className="card-img-top" src='https://i.ytimg.com/vi/cqlRKWlFxIw/maxresdefault.jpg' alt={spin} />}
    <div className="card-body">
      <h5 className="card-title">{props.headline}</h5>
      <p className="card-text">{props.news}</p>
      <a href={props.url} target="_blank" className="btn btn-warning">Read more</a>
    </div>
  </div>
  )
}
