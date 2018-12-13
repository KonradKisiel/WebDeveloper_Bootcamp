import React, { Component } from 'react';
import './App.css';
import SearchBox from '../components/SearchBox';
import Content from '../components/Content';
import Footer from '../components/Footer';

//let selecedValue = document.getElementById('Search-select').value;

class App extends Component {
  constructor() {
    super();
    this.state = {
      cardsText: [],
      searchOption: 'people',
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://swapi.co/api/people/?search=')
      .then(response => response.json())
      .then(textData => this.setState({ cardsText: textData.results }));
  }

  onSearchChange = event => {
    this.setState({ searchfield: event.target.value })
  }

  onOptionChange = event => {
    this.setState({ searchOption: event.target.value })
    console.log(event.target.value)
  }

  render() {
    const { cardsText, searchOption, searchfield } = this.state;
    const filteredCards = cardsText.filter(cardText => {
      return cardText.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return !cardsText.length ? <h1 id="loading" className="Sw-txt">Loading...</h1> : (
      <div className="App">
        <div id="App-top-bar">
          <header id="App-header">
            <h1 className="Sw-txt">Star Wars App</h1>
          </header>
            <SearchBox searchChange={this.onSearchChange} optionChange={this.onOptionChange} />
        </div>
        <Content cardsText={filteredCards} />
        <Footer />
      </div>
    );
  }
}

export default App;
