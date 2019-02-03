import React, { Component } from 'react';
import './App.css';
import Home from './components/Home'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import About from './components/About';
import Work from './components/Work';
import CustomNavbar from './components/CustomNavbar';
import Footer from './components/Footer';
import Upload from './components/Upload';
class App extends Component {
  state={
    blocks:[]
  }

  render() {
    return (
      <Router>
        <div className="App">
        <CustomNavbar></CustomNavbar>
        
      <Route exact path="/" component={Home}>
      </Route>
      <Route  path="/about" component={About}></Route>
      <Route path="/work" component={Work}></Route>
      <Route path="/upload" component={Upload}>
      </Route>
      <Footer></Footer>
      </div>
      
      </Router>
    );
  }
}

export default App;
