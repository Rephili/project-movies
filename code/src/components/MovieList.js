import React from "react";
import { Link } from "react-router-dom";

import "./MovieList.css";

// The code below maps the list of movies and then we display the poster, title and release date for each movie
// When clicking on a movie the user gets to the detail page

export const MovieList = ({ movies }) => {
  return (
    <section className="list-container">
      {movies.map((movie) => (
        <div className="movie-card-container" key={movie.original_title}>
          <Link to={`/details/${movie.id}`} key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
              alt="movie poster">
            </img>
            <div className="movie-card-overlay">
              <div className="movie-card-text">
                <h1 className="movie-title">{movie.original_title}</h1>
                <p className="movie-release-text">
                  Released {movie.release_date}
                </p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </section>
  );
};