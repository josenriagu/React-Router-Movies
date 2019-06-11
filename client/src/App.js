import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

const App = props => {
  let [savedList, updateSavedList] = useState(JSON.parse(localStorage.getItem('saved')) || []);

  const addToSavedList = movieToSave => {
    const alreadyOnTheList = savedList.find(movie => {
      return movieToSave.id === movie.id
    })
    if (!alreadyOnTheList) {
      const newSavedList = savedList.concat(movieToSave);
      updateSavedList(newSavedList)
      // save to localStorage
      localStorage.setItem('saved', JSON.stringify(newSavedList));
    } else alert("This movie is already saved by you. Here's a pony!")
  };

  const clearSavedList = () => {
    updateSavedList([])
    localStorage.clear();
  }

  return (
    <div>
      <SavedList clearSavedList={clearSavedList} list={savedList} />
      <Route
        exact
        path='/'
        component={MovieList}
      />
      <Route
        path='/movies/:id'
        render={(props) => <Movie {...props} addToSavedList={addToSavedList} />}
      />
    </div>
  );
}

export default App;