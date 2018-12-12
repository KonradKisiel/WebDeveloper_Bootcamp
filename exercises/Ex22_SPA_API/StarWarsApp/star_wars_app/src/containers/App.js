import React, { Component } from 'react';
import './App.css';
import Select from '../components/Select';
import SearchBox from '../components/SearchBox';
import Content from '../components/Content';
import Footer from '../components/Footer';
import Scroll from '../components/Scroll';


//let selecedValue = document.getElementById('Search-select').value;

class App extends Component {
  constructor() {
    super();
    this.state = {
      cardsText: [],
      select: '',
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
    this.setState({ select: event.target.value })
    console.log(event.target.value)
  }

  render() {
    const { cardsText, searchfield } = this.state;
    const filteredCards = cardsText.filter(cardText => {
      return cardText.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return !cardsText.length ? <h1 id="loading" className="Sw-txt">Loading...</h1> : (
      <div className="App">
        <div id="App-top-bar">
          <header className="App-header">
            <h1 className="Sw-txt">Star Wars App</h1>
          </header>
          <div id="Search-bar">
            <form>
              <Select optionChange={this.onOptionChange}/>
              <SearchBox searchChange={this.onSearchChange} />
            </form>
          </div>
        </div>
        <Scroll >
          <Content cardsText={filteredCards} />
        </Scroll>
        <Footer />
      </div>
    );
  }
}

export default App;
