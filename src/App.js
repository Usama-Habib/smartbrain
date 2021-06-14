import React, {Component} from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Clarifai from 'clarifai';
import Logo from './components/Logo/Logo';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Particles from 'react-particles-js';
import ImageRecognition from './components/ImageRecognition/ImageRecognition';

const config = {
  "particles":{
    "number":{
      "value":80,
      "density":{
        "enable":true,
        "value_area":800
      }
    }
  }
}


//You must add your own API key here from Clarifai.
const app = new Clarifai.App({
 apiKey: '7ebc9459b3ef4a1da7ee52e6b32c58cb'
});

const initialState = {
  input: '',
  imageUrl : '',
  box: {},
  route: 'signin',
  isSignedIn: false,
  user:{
    id: 0,
    name: "",
    email: '',
    count: 0,
    created: new Date
  }
}
class App extends Component {

  constructor () {
    super();

    this.state = initialState
  }

  loadUser = (data) => {
    this.setState({
      user:{
        id: data.id,
        name: data.name,
        email: data.password,
        count: data.entries,
        created: data.joined
      }
    })
  }


  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayFaceBox = (box) => {
    // console.log(box);
    this.setState({box: box});
  }

   onInputChange = (event) => {
    this.setState({input: event.target.value});
    // console.log(event.target.value)
  }

  onButtonPress = (event) => {
    this.setState({imageUrl: this.state.input});
      fetch('https://my-smartbrain-api.herokuapp.com/imageUrl',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              input: this.state.input
        })
      })
      .then(response => response.json())
      .then(response => {
        // console.log('hi', response.outputs[0].data.regions[0].region_info.bounding_box)
        if (response) {
          fetch('https://my-smartbrain-api.herokuapp.com/image', {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              id: this.state.user.id
            })
          })
            .then(response => response.json())
            .then(count => {
              this.setState(Object.assign(this.state.user, { count: count}))
            })
        }
        this.displayFaceBox(this.calculateFaceLocation(response))
      })
      .catch(err => console.log(err));
  }

  onRouteChange = (route) => {
    if (route === 'home') {
      this.setState({isSignedIn: true})
    }else if (route === 'signout') {
      this.setState(initialState)
    }
    this.setState({route: route})
  }

  render () {

    const { isSignedIn, route, input, imageUrl, box } = this.state;

    return (
    <div className="App">
      <Particles className="particles" 
        params ={config} />
      <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
      {
        route === 'home' ? 
        <div> 
            <Logo />
            <Rank name={this.state.user.name} count={this.state.user.count} />
            <ImageLinkForm onInputChange={this.onInputChange} onButtonPress={this.onButtonPress}/>
            <ImageRecognition box={box} imageUrl={input}/>     
        </div>
        : (
          route === 'signin' ? 
          <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
          : 
          <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
        )
      }
    </div>
    );
  }
}

export default App;
