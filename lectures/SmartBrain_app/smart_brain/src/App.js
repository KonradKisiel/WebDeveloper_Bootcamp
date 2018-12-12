import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import Navigation from './components/Navigation/Navigation';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import './App.css';
import Rank from './components/Rank/Rank';

// initialize with your api key. This will also work in your browser via http://browserify.org/
const app = new Clarifai.App({
 apiKey: 'secret'
});

const particleOptions = {
  particles: {
    number: {
      //add 00
      value: 400,
      density: {
        enable: true,
        vaue_area: 800
      }
    }
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: ''
    }
  }

  onInputChange = event => {
   this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    {/* setting app state */}
    this.setState({imageUrl: this.state.input})
    app.models.predict(
        Clarifai.FACE_DETECT_MODEL, 
        this.state.input)
      .then(
      function (response) {
        console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
      },
      function (err) {
        // there was an error
      }
    );
  }

  render() {
    return (
      <div className="App">
        <Particles className="particles" params={particleOptions} />
        <Navigation />
        <Logo />
        <br></br>
        <Rank />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />     
        <br></br>
        {/* use data from state (set in onButtonSubmit) */}
        <FaceRecognition imageUrl={this.state.imageUrl} />
      </div>
    );
  }
}

export default App;
