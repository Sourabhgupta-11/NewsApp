import React, { Component } from 'react'
import {Link} from "react-router-dom"


export class Navbar extends Component {
  constructor(props){
    super(props);
    this.state={
      searchTerm:""
    };
  }


  handleInputChange=(e)=>{
    this.setState({searchTerm:e.target.value})
  }
  handleSearch=(e)=>{
    e.preventDefault();
    this.props.onSearch(this.state.searchTerm)
  }

//-----------------------------------------------------------------------------------------------------------------------------------------------------
  render() {
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">NewsApp</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target=".navbar-collapse" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">Link</Link>
              </li>
              <li className='nav-items'><Link className='nav-link' to='/about'>About</Link></li>
              <li className='nav-items'><Link className='nav-link' to='/business'>Business</Link></li>
              <li className='nav-items'><Link className='nav-link' to='/entertainment'>Entertainment</Link></li>
              <li className='nav-items'><Link className='nav-link' to='/general'>General</Link></li>
              <li className='nav-items'><Link className='nav-link' to='/health'>Health</Link></li>
              <li className='nav-items'><Link className='nav-link' to='/science'>Science</Link></li>
              <li className='nav-items'><Link className='nav-link' to='/sports'>Sports</Link></li>
              <li className='nav-items'><Link className='nav-link' to='/technology'>Technology</Link></li>
            </ul>
            <div className="form-check form-switch text-dark">
           <input className="form-check-input" onClick={this.props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
           <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{this.props.txt}</label>
           </div>
            <form className="d-none d-lg-flex" onSubmit={this.handleSearch} >
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={this.state.searchTerm} onChange={this.handleInputChange}/>
            <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            

          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
