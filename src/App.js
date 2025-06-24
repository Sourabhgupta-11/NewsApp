import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import{
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import LoadingBar from "react-top-loading-bar";



export class App extends Component {
  constructor(props){
    super(props);
    this.state={
      query:"",
      mode:'light',
      modetxt:'Dark Mode',
      progress: 0
    };
  }


  toggleMode=()=>{
    if(this.state.mode==='light'){
      this.setState({mode:'dark',modetxt:"Light Mode"})
      document.body.style.backgroundColor='black'
      
    }
    else{
      this.setState({mode:'light',modetxt:"Dark Mode"})
      document.body.style.backgroundColor='white'
    }
  }

  handleSearch=(query)=>{
    this.setState({query:query})
  }

  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <>
      <Router>
      <Navbar onSearch={this.handleSearch} toggleMode={this.toggleMode} txt={this.modetxt} mode={this.mode}/>
      <LoadingBar
        color="#f11946"
        progress={this.state.progress}
      />
      <Routes>
        <Route exact path="/" element={<News setProgress={this.setProgress} key="general" pageSize={9} country="us" category="general" query={this.state.query} mode={this.state.mode}/>}/>
        <Route exact path="/about" element={<News setProgress={this.setProgress} key="general" pageSize={9} country="us" category="general" query={this.state.query} mode={this.state.mode}/>}/>
        <Route exact path="/business" element={<News setProgress={this.setProgress} key="business" pageSize={9} country="us" category="business" query={this.state.query} mode={this.state.mode}/>}/>
        <Route exact path="/entertainment" element={<News setProgress={this.setProgress} key="entertainment" pageSize={9} country="us" category="entertainment" query={this.state.query} mode={this.state.mode}/>}/>
        <Route exact path="/general" element={<News setProgress={this.setProgress} key="general" pageSize={9} country="us" category="general" query={this.state.query} mode={this.state.mode}/>}/>
        <Route exact path="/health" element={<News setProgress={this.setProgress} key="health" pageSize={9} country="us" category="health" query={this.state.query} mode={this.state.mode}/>}/>
        <Route exact path="/science" element={<News setProgress={this.setProgress} key="science" pageSize={9} country="us" category="science" query={this.state.query} mode={this.state.mode}/>}/>
        <Route exact path="/sports" element={<News setProgress={this.setProgress} key="sports" pageSize={9} country="us" category="sports" query={this.state.query} mode={this.state.mode}/>}/>
        <Route exact path="/technology" element={<News setProgress={this.setProgress} key="technology" pageSize={9} country="us" category="technology" query={this.state.query} mode={this.state.mode}/>}/>

      </Routes>
      </Router>
      </>
    )
  }
}

export default App