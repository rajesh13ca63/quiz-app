import { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import './MovieDashboardStyle.css';
import MovieNotFound from './MovieNotFound';
const MovieDashboard = () => {
    const [searchMovie, setSearchMovie] = useState('');
    const [movies, setMovies]=useState([]);
    const [loader, setLoader] = useState(false);

    const url_api = 'http://www.omdbapi.com/?i=tt3896198&apikey=8b1aee50'

    const handleSearch = async(title) => {
        setLoader(true);
        const searhItem = title ? title:'batman';
        const response = await fetch(`${url_api}&s=${searhItem}`);
        const data = await response.json();
        // fetch(`${url_api}&s=${title}`)
        // .then(res => res.json())
        // .then(response => {
        //     setMovies(response)
        // });
        setMovies(data.Search);
            setLoader(false);
    }
    const handleKeyEnter = (event) => {
        if(event.key === 'Enter') {
            handleSearch(searchMovie);
        }
    }
    
    useEffect(() => {
        handleSearch('Batman');
    }, []);
  
    return (
        <div className='movidashboard'>
            <h1>Movie Land</h1>
            <div className='intpurSeach'>
                <input type="text" placeholder='Search movie'
                value={searchMovie} onChange={(e)=>setSearchMovie(e.target.value)}
                onKeyDown={handleKeyEnter}/>
                <img src='./image/search_icon.svg' alt='searc_icon'
                onClick={() => handleSearch(searchMovie)}></img>
            </div>
            {movies && movies.length > 0 ?
                (<div className='moviecontainer'>
                    {movies.map(movie => 
                        <MovieCard movie={movie} key={movie.imdbID}/>
                    )}
                </div>):(<MovieNotFound value={loader}/>)
            }
            { loader && (<div className='loader'></div>) }
        </div>
    )
}

export default MovieDashboard;