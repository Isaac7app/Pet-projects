import './App.css';
import Navigation from './components/Navigation/Navigation';
import ImageLinkForm from './components/Navigation/ImageLinkForm/ImageLinkForm';
import Rank from './components/Navigation/Rank/Rank'
import { Component } from 'react/cjs/react.production.min';



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
  console.log('click')
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
