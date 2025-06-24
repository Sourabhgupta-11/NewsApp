import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description,info,imageurl,author,date,source,mode} = this.props;
    return (
      <div className='my-3'>
        <div className="card h-100">
        <div style={{display: 'flex', justifyContent: 'flex-end', position:'absolute', right:'0'}}>
          <span className="badge rounded-pill bg-danger">
          {source}
          </span>
        </div>
        <img src={imageurl} className="card-img-top" alt="..."/>
        <div className="card-body d-flex flex-column" 
        style={{color: mode==='dark'?'white':'black',backgroundColor: mode==='dark'?'black':'white'}}>
        <h5 className="card-title">{title}...</h5>
        <p className="card-text">{description}...</p>
        <p className="card-text"><small className="text">By {author?author:"Unknown"} on {new Date(date).toUTCString()}</small></p>
        <a href={info} target={"_blank"} rel="noreferrer" className="btn btn-primary mt-auto">Read More</a>
        </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
//style={{color: mode==='dark'?'white':'black',backgroundColor: mode==='dark'?'black':'white'}}