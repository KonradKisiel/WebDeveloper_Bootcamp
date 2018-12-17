import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import Navigation from './components/Navigation/Navigation';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import './App.css';
import Rank from './components/Rank/Rank';

// initialize with your api key. This will also work in your browser via http://browserify.org/
const app = new Clarifai.App({
  apiKey: 'a04a8acbfceb4ea1bfd639f51a975561'
});

const particleOptions = {
  particles: {
    number: {
      //add 00
      value: 4,
      density: {
        enable: true,
        vaue_area: 80
      }
    }
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: {},
      //keeps track where we are on the page
      route: 'signin',
      isSignedIn: false
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000')
    .then(response => response.json())
    .then(console.log) //the same as data => console.log(data)
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);
    console.log(width, height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height),
    }
  }

  displayFaceBox = box => {
    this.setState({ box: box })
  }

  onInputChange = event => {
    this.setState({ input: event.target.value });
  }

  onButtonSubmit = () => {
    { /* setting app state */ }
    this.setState({ imageUrl: this.state.input })
    app.models.predict(
      Clarifai.FACE_DETECT_MODEL,
      this.state.input)
      .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
      .catch(err => console.log(err))
  }

  onRouteChange = (route) =>{
    if(route === 'signout') {
      this.setState({isSignedIn: false})
    } else if(route === 'home'){
      this.setState({isSignedIn: true})
    }
    this.setState({route: route})
  }

  render() {
    const { isSignedIn, imageUrl, route, box} = this.state
    return (
      <div className="App">
        <Particles className="particles" params={particleOptions} />
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
        {route === 'home' ? 
          <div>
            <Logo />
            <br></br>
            <Rank />
            <ImageLinkForm
              onInputChange={this.onInputChange}
              onButtonSubmit={this.onButtonSubmit}
            />
            <br></br>
            { /* use data from state (set in onButtonSubmit) */ }
            <FaceRecognition box={box} imageUrl={imageUrl} />
          </div>
          :(
            route === 'signin' 
            ? <SignIn onRouteChange={this.onRouteChange}/> 
            : <Register onRouteChange={this.onRouteChange}/> 
          )
        }
      </div>
    );
  }
}

export default App;
