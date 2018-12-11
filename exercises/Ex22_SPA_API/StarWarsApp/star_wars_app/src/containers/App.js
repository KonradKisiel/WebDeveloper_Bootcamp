import React, { Component } from 'react';
import './App.css';
import TopBar from '../components/TopBar';
import Content from '../components/Content';
import Footer from '../components/Footer';

let select = document.get

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopBar />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
