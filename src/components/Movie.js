import React from 'react';
const DEFAULT_PLACEHOLDER_IMAGE =
  "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

  const Movie=(props)=>{
            const {movie}=props;
            const poster= movie.Poster==="N/A"?DEFAULT_PLACEHOLDER_IMAGE:movie.Poster;
            return(
                    <div className="movie" style={{flexShrink:0,width:"20%"}}>
                            <h3>{movie.Title}</h3>
                            <img src={poster} alt={movie.Title}/>
                            <p>{movie.Year}</p>
                    </div>
            )
  }

  export default Movie;