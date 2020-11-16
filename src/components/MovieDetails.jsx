import React from 'react';

const MovieDetails = props => {

    const closeDetails = () =>{
        document.getElementById("details-wrapper").style.display = "none";
    }

    return (
            <div className="movie-wrapper">
                <div className="poster-wrapper">
                    <img src={props.movie.Poster} alt={props.movie.Poster}/>
                </div>
                <div className="movie-info">
                    <h3>Title: {props.movie.Title}</h3>
                    <p>Plot: {props.movie.Plot}</p>
                    <p>Rated: {props.movie.Rated}</p>
                    <p>Metascore: {props.movie.Metascore}</p>
                    <button onClick={closeDetails}>Close</button>
                </div>
            </div>
    );
};

export default MovieDetails;