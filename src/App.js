import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Particles from 'react-particles-js';

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


function App() {
  return (
    <div className="App">
      <Particles className="particles" 
        params ={config}
      />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
     { 
      // <ImageRecognition />
     }
    </div>
  );
}

export default App;
