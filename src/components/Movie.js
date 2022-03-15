import React from "react";
const imageApi = "https://image.tmdb.org/t/p/original";

const setVoteClass = (vote) => {
    if(vote>=7.5)
        return "green";
    else if(vote>=5.5)
        return "orange";
    else
        return "red";
}
const Movie = ({original_title, poster_path, overview, vote_average})=>{
    return(
        <div className="movie">
            <img src={poster_path?(imageApi+poster_path):"https://images.unsplash.com/photo-1568876694728-451bbf694b83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"} alt={original_title}/>
            <div className="movie-info">
                <h3>{original_title}</h3>
                <span className={`tag ${setVoteClass(vote_average)}`}>{vote_average}</span>
            </div>
            <div className="movie-overview">
                <h2>Overview</h2>
                <p>{overview}</p>
            </div>
            
        </div>
    );
};

export default Movie;