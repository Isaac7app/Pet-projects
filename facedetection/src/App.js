import './App.css';
import Navigation from './components/Navigation/Navigation';
import ImageLinkForm from './components/Navigation/ImageLinkForm/ImageLinkForm';
import Rank from './components/Navigation/Rank/Rank'
function App() {
  return (
    <div className="App">
     <Navigation />
     <ImageLinkForm />
     <Rank />
    </div>
  );
}

export default App;
