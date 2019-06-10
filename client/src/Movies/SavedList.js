import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SavedList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {this.props.list.map(movie => (
          <Link className='link' to={`/movies/${movie.id}`}>
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
        <Link className='link' to={'/'}>
          <div className="home-button">Home</div>
        </Link>
      </div >
    );
  }
}
