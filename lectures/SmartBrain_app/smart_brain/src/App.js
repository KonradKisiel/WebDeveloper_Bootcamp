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

/*clarifai installation issues:
npm WARN smart_brain_api@1.0.0 No repository field.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.7 (node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.7: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})
*/
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

const initialState = {
  input: '',
  imageUrl: '',
  box: {},
  //keeps track where we are on the page
  route: 'signin',
  isSignedIn: false,
  //user data erturned from database
  user: {
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined: ''
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

loadUser = (data) => {
  this.setState({
    user: {
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined
    }
  })
}

calculateFaceLocation = (data) => {
  const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box
  const image = document.getElementById('inputImage');
  const width = Number(image.width);
  const height = Number(image.height);
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

onPictureSubmit = () => {
  //setting app state
  this.setState({ imageUrl: this.state.input })
  app.models.predict(
    Clarifai.FACE_DETECT_MODEL,
    this.state.input)
    .then(response => {
      //as long as we have a response
      if (response) {
        fetch('http://localhost:3001/image', {
          method: 'put',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            id: this.state.user.id
          })
        })
          .then(response => response.json())
          .then(count => {
            //to update obj property use Object.assign(target_object, {parameter_to_extend_with})
            this.setState(this.setState(Object.assign(this.state.user, { entries: count })))
          })
      }
      this.displayFaceBox(this.calculateFaceLocation(response))
    })
    .catch(console.log)
}

onRouteChange = (route) => {
  if (route === 'signout') {
    this.setState(initialState)
  } else if (route === 'home') {
    this.setState({ isSignedIn: true })
  }
  this.setState({ route: route })
}

render() {
  const { isSignedIn, imageUrl, route, box } = this.state
  return (
    <div className="App">
      <Particles className="particles" params={particleOptions} />
      <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
      {route === 'home' ?
        <div>
          <Logo />
          <br></br>
          <Rank name={this.state.user.name} entries={this.state.user.entries} />
          <ImageLinkForm
            onInputChange={this.onInputChange}
            onPictureSubmit={this.onPictureSubmit}
          />
          <br></br>
          { /* use data from state (set in onPictureSubmit) */}
          <FaceRecognition box={box} imageUrl={imageUrl} />
        </div>
        : (
          route === 'signin'
            ? <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
            : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
        )
      }
    </div>
  );
}
}

export default App;
