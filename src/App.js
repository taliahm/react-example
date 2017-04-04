import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';

import Header from './components/Header';
import SearchForm from './components/SearchForm';
import ResultList from './components/ResultList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      searchQuery: '',
      offSet: 6,
    };
  }

  componentDidMount() {
    this.searchGifs('dogs');
  }

  searchGifs = (searchQuery) => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${searchQuery}&limit=6&api_key=dc6zaTOxFJmzC`).then(data => data.json())
      .then(response => {
        this.setState({
          results: response.data,
          searchQuery: searchQuery,
          offSet: 6
        });
      });
  }
  searchGifMore = (searchQuery) => {
      console.log(this.state.offSet)
      fetch(`http://api.giphy.com/v1/gifs/search?q=${searchQuery}&limit=25&offset=${this.state.offSet}&api_key=dc6zaTOxFJmzC`).then(data => data.json())
      .then(response => {
        this.setState({
          results: [...this.state.results, ...response.data], 
          searchQuery: searchQuery,
          offSet: this.state.offSet + 25,
        });    
      });
  }
  loadMore = (e) => {
    e.preventDefault();
    this.searchGifMore(this.state.searchQuery);
  }
  render() {
    return (
      <main className="app">
        <Header />
        <SearchForm startSearch={this.searchGifs} />
        <ResultList 
            gifs={this.state.results} 
            loadMore={this.loadMore}
          />
      </main>
    );
  }
}

export default App;
