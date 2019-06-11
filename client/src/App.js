import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: []
    };
  }
  componentDidMount() {
    // check if there are saved movies and load onto state
    const saved = JSON.parse(localStorage.getItem('saved'));
    if (saved) {
      this.setState({ ...this.state, savedList: saved });
    }
  }

  addToSavedList = movieToSave => {
    const savedList = this.state.savedList;
    const alreadyOnTheList = savedList.find(movie => movieToSave.id === movie.id)
    if (!alreadyOnTheList) {
      savedList.push(movieToSave);
      this.setState({ ...this.state, savedList: savedList });
      // save to localStorage
      localStorage.setItem('saved', JSON.stringify(this.state.savedList));
    } else alert("This movie is already saved by you. Here's a pony!")
  };

  clearSavedList = () => {
    this.setState({ ...this.state, savedList: [] });
    localStorage.clear();
  }

  render() {
    return (
      <div>
        <SavedList clearSavedList={this.clearSavedList} list={this.state.savedList} />
        <Route
          exact
          path='/'
          component={MovieList}
        />
        <Route
          path='/movies/:id'
          render={(props) => <Movie {...props} addToSavedList={this.addToSavedList} />}
        />
      </div>
    );
  }
}