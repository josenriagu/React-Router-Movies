import React from 'react';
import { Link } from 'react-router-dom';

const SavedList = props => {
  const clearStyle = (props.list.length !== 0) ? "home-button" : "hidden";
  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        <Link key={movie.id} className='link' to={`/movies/${movie.id}`}>
          {/* Shrink long movie titles */}
          {
            (movie.title === 'The Lord of the Rings: The Fellowship of the Ring')
              ?
              < span className="saved-movie">LOTR</span>
              :
              (movie.title === 'Terminator 2: Judgement Day')
                ?
                < span className="saved-movie">T2JDay</span>
                :
                (movie.title === 'Dumb and Dumber')
                  ?
                  < span className="saved-movie">D&D</span>
                  :
                  <span className="saved-movie">{movie.title}</span>
          }
        </Link>
      ))
      }
      <div
        className={clearStyle}
        onClick={props.clearSavedList}
      >Clear</div>
      <Link
        className='link'
        to={'/'}>
        <div className="home-button">Home</div>
      </Link>
    </div >
  );
}

export default SavedList;
