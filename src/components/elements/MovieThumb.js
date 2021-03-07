import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import { StyledMovieThumb } from '../styles/StyledMovieThumb';

const MovieThumb = ({ image, movieId, clickable }) => (
  
  <StyledMovieThumb>
    {clickable ? (
      <Link to={`/React-RMDB/${movieId}`}>
        <img className="clickable" src={image} alt="moviethumb" />
      </Link>
    ) : (
      <img src={image} alt="moviethumb" />
    )}
  </StyledMovieThumb>
  
)
MovieThumb.prototype = {
  image: PropTypes.string,
  movieId: PropTypes.number,
  clickable: PropTypes.bool,
}
export default MovieThumb;

