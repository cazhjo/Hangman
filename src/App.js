import React from 'react';
import logo from './logo.svg';
import './App.css';
import hang from './images/hang.jpg'

class Use extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isUsed: false };
    this.text = props.children;
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isUsed: true
    }));
  }

  render() {
    let btnClass = this.state.isUsed ? "inactive" : "active";
    
    return (
      <button className={btnClass} onClick={this.handleClick}>
        {this.text}
      </button>
    );
    
  }
}

function App() {
  let alphabet = 'abcdefghijklmnopqrstuvwxyzåäö'.split('');

  return (
    <div className="App">
      <h1>Hänga gubbe</h1>
      <p>Spelet går ut på att gissa ett ord</p>
      <img src={hang} />

      <div id="lines">
        <p>_</p>
        <p>_</p>
        <p>_</p>
        <p>_</p>
        <p>_</p>
      </div>
      <p>Antal fel: 0</p>
      <div id="characters">
        {alphabet.map(x => <Use>{x}</Use>)}
      </div>
    </div>
  );
}

export default App;
