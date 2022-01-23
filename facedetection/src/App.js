import './App.css';
import Particles from "react-tsparticles";
import Navigation from './components/Navigation/Navigation';
import ImageLinkForm from './components/Navigation/ImageLinkForm/ImageLinkForm';
import Rank from './components/Navigation/Rank/Rank'








function App() {
  return (
    <div className="App">
     <Navigation />
     <Rank />
     <ImageLinkForm />
    </div>
  );
}

export default App;
