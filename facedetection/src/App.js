import './App.css';
import Navigation from './components/Navigation/Navigation';
import ImageLinkForm from './components/Navigation/ImageLinkForm/ImageLinkForm';
import Rank from './components/Navigation/Rank/Rank'
import { Component } from 'react/cjs/react.production.min';
import Clarifai from 'clarifai';

const app = new Clarifai.App({
  apikey:'2a66697514b74db485dbe49460cfa270'
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
    }
  }

  onInputChange = (event)=>{
    console.log(event.target.value)
  }

onButtonSubmit = ()=>{
  console.log('click');
  app.models.predict('53e1df302c079b3db8a0a36033ed2d15', 'https://www.clarifai.com/models/face-detection',
  function(response) {
    console.log(response)
  },
   function(err){

   }
   )
}

  render(){
    return (
      <div className="App">
       <Navigation />
       <Rank />
       <ImageLinkForm 
       onInputChange={this.onInputChange} 
       onButtonSubmit={this.onButtonSubmit}/>
      </div>
    );
  }
}

export default App;
