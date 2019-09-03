import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      counter: 0
    }

  }

  subtractCounter = () => {
    this.setState({
      counter: this.state.counter - 1
    })
  }

  addCounter = () => {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  render(){
    return (
      <div>
        <button onClick={this.subtractCounter}>-</button>
        <span>{this.state.counter}</span>
        <button onClick={this.addCounter}>+</button>
      </div>
    )
  }
}

export default App;


//create the actual 2 buttons with display
//set the counter state to 0
//use onclick to change the state