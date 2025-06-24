import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

export class News extends Component {
  
  static defaultProps={
    country:"in",
    pageSize:5,
    category:"pts"    
  }
  static propTypes={
    country:PropTypes.string,
    category:PropTypes.string,
    pageSize:PropTypes.number
    
  }

  constructor(props){
    super(props);
    this.state={
      articles:[],
      loading:true,
      page:1,
      totalResults:0

    }
    document.title=`${this.capitalizeFirstLetter(this.props.category)}-NewsMonkey`;
  }

  //--------------------------------------------------------------------------------------------------------------------------------------------------------------


    
  capitalizeFirstLetter=(val)=> {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
  }


  async updateNews(){
    this.props.setProgress(0);
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&q=${this.props.query}&apiKey=b1d213e16bdf451fb7d30bccfd1fd694&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data=await fetch(url)
    this.props.setProgress(30);
    let parsedData=await data.json();
    this.props.setProgress(70);
    if(parsedData.articles){
    this.setState({
      articles:parsedData.articles,
      totalResults:parsedData.totalResults,
      loading:false
  })
    }
    this.props.setProgress(100);
  }


  async componentDidMount(){
    this.updateNews();
  }
  async componentDidUpdate(prevProps){
    if(this.props.query!==prevProps.query){
      await this.updateNews();
    }
  }

  /*
  handlePreviousClick= async ()=>{
    await this.setState({page:this.state.page-1})
    this.updateNews();
  }


  handleNextClick= async ()=>{
    await this.setState({page:this.state.page+1})
    this.updateNews();
  }
  */


  fetchMoreData = async () => {
    this.setState({page: this.state.page+1})
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&q=${this.props.query}&apiKey=b1d213e16bdf451fb7d30bccfd1fd694&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    let data=await fetch(url)
    let parsedData=await data.json();
    if(parsedData.articles){
    this.setState({
      articles:this.state.articles.concat(parsedData.articles),
      totalResults:parsedData.totalResults
  })
    }

  };

  //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


  render() {
    return (
    <>
      <h2 className='text-center' style={{margin:"90px",marginBottom: "30px", color: this.props.mode==='dark'?'white':'black'}}>NewsApp - Top {this.capitalizeFirstLetter(this.props.category)} Headlines!</h2>
      {this.state.loading && <Spinner/>}
      <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length < this.state.totalResults}
          loader={this.state.loading && <Spinner/>}
      >
      <div className='container'>

      <div className='row'>
        {this.state.articles.map((element,index)=>{
          return <div className="col-md-4" key={index}>
          <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} info={element.url} imageurl={element.urlToImage} author={element.author} date={element.publishedAt} source={element.source.name} mode={this.props.mode}/>
          </div>
        })}

      </div>
      </div>
      </InfiniteScroll>

      



    {/*<div className='container d-flex justify-content-between' >
      <button disabled={this.state.page<=1} type="button" className='btn btn-dark' onClick={this.handlePreviousClick} style={{color: this.props.mode==='dark'?'black':'white',backgroundColor: this.props.mode==='dark'?'white':'black'}}> &larr; Previous</button>
      <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className='btn btn-dark' onClick={this.handleNextClick} style={{color: this.props.mode==='dark'?'black':'white',backgroundColor: this.props.mode==='dark'?'white':'black'}}>Next &rarr;</button>
    </div>*/}
    </>
    )
  }
}

export default News