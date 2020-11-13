import React, {useEffect, useState} from 'react';
import axios from 'axios';

const MovieDetails = props => {

    const [movie, setMovie] = useState([]);
    const URL= 'http://www.omdbapi.com?apikey=';
    const API_KEY = '60dbbaf4';
    const SEARCH = '&t=';

    const getApiAxios = (title) => {
        axios.get(URL + API_KEY + SEARCH + title)
            .then(response => {
                setMovie(response.data);
            })
        console.log("---------------");
        console.log(movie);
    }

    
    const clearState = () => {
        setMovie([]);
    }

    const handleClick = event => {
       getApiAxios(event.target.value);
    }

    return (
        <div>
            <button onClick={handleClick} value={props.movieTitle}>Movie Details</button>
            <div className="details" id={props.movieTitle}>
                <h3>Title: {movie.Title}</h3>
                <p>Plot: {movie.Plot}</p>
                <p>Rated: {movie.Rated}</p>
                <p>Metascore: {movie.Metascore}</p>
                <img src={movie.Poster}/>
            </div>
        </div>
    );
};

export default MovieDetails;