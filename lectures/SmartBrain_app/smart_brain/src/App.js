import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import './App.css';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';

const particleOptions = {
    particles: {
      number: {
        value: 400,
        density: {
          enable: true,
          vaue_area: 800
        }
      }
    }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Particles className="particles" params={particleOptions} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm />
        { /*      
        <FaceRecognition /> 
        */ }
      </div>
    );
  }
}

export default App;
