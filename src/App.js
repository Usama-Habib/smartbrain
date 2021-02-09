import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';


function App() {
  return (
    <div className="App">
      <Navigation />
      <Logo />
      <ImageLinkForm />
     { 
      // <ImageRecognition />
     }
    </div>
  );
}

export default App;
