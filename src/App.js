import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      image: '',
      description: '',
      people: []
    };
  }

  render() {
    const people = this.state.people.map((person, ind) => (
      <div key={ind} className="">
        <h3>{person.name}</h3>
        <img src={person.img} />
        <p>{person.description}</p>
      </div>
    ));
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <br />
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Image Url" />
        <br />
        <br />
        <textarea
          style={{ width: '255px' }}
          type="text"
          placeholder="Description"
        />{' '}
        <br />
        <button type="button">Submit</button>
        <div className="">{people}</div>
      </div>
    );
  }
}

export default App;
