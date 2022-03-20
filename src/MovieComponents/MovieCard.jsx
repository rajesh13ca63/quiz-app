import './MovieDashboardStyle.css';

const MovieCard = ({movie}) => {
    return(
        <div className="movie" key={movie.imdbID}>
            <div>
                <p>{movie.Year}</p>
            </div>
            <div>
                <img src={movie.Poster !== "N/A" ? movie.Poster : "./image/not-found"} alt={movie.Title} />
            </div>
            <div>
                <span>{movie.Type}</span>
                <h5>{movie.Title}</h5>
            </div>
        </div>
    )
}

export default MovieCard;
