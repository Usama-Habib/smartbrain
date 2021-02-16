import React, {Component} from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Clarifai from 'clarifai';
import Logo from './components/Logo/Logo';
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

class App extends Component {

  constructor () {
    super();

    this.state = {
      input: '',
      imageUrl : ''
    }
  }

   onInputChange = (event) => {
    this.setState({input: event.target.value});
    // console.log(event.target.value)
  }

  onButtonPress =(event) => {
    this.setState({imageUrl: this.state.input});
    app.models
      .predict(
        // HEADS UP! Sometimes the Clarifai Models can be down or not working as they are constantly getting updated.
        // A good way to check if the model you are using is up, is to check them on the clarifai website. For example,
        // for the Face Detect Mode: https://www.clarifai.com/models/face-detection
        // If that isn't working, then that means you will have to wait until their servers are back up. Another solution
        // is to use a different version of their model that works like: `c0c0ac362b03416da06ab3fa36fb58e3`
        // so you would change from:
        // .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
        // to:
        // .predict('c0c0ac362b03416da06ab3fa36fb58e3', this.state.input)
        Clarifai.FACE_DETECT_MODEL,
        this.state.input)
      .then(response => {
        console.log('hi', response.outputs[0].data)
        // if (response) {
        //   fetch('http://localhost:3000/image', {
        //     method: 'put',
        //     headers: {'Content-Type': 'application/json'},
        //     body: JSON.stringify({
        //       id: this.state.user.id
        //     })
        //   })
        //     .then(response => response.json())
        //     .then(count => {
        //       this.setState(Object.assign(this.state.user, { entries: count}))
        //     })

        // }
        // this.displayFaceBox(this.calculateFaceLocation(response))
      })
      // .catch(err => console.log(err));
  }

  render () {
    return (
    <div className="App">
      <Particles className="particles" 
        params ={config}
      />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm onInputChange={this.onInputChange} onButtonPress={this.onButtonPress}/>
      <ImageRecognition imageUrl={this.state.input}/>     
    </div>
    );
  }
}

export default App;
