import { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import './MovieDashboardStyle.css';
const MovieDashboard = () => {
    const [searchMovie, setSearchMovie] = useState('');
    const [movies, setMovies]=useState([]);

    const url_api = 'http://www.omdbapi.com/?i=tt3896198&apikey=8b1aee50'

    const handleSearch = async(title) => {
        console.log('handle search called');
        const response = await fetch(`${url_api}&s=${title}`);
        const data = await response.json();
        // fetch(`${url_api}&s=${title}`)
        // .then(res => res.json())
        // .then(response => {
        //     setMovies(response)
        // });
        setMovies(data.Search);
    }
    const handleKeyEnter = (event) => {
        if(event.key === 'Enter') {
            console.log('hanlde enter key');
            handleSearch(searchMovie);
        }
    }
    
    useEffect(() => {
        console.log('useEffect called');
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
                        <MovieCard movie={movie} key={movie.imdbID} />
                    )}
                </div>):
                (<div className='empty'>
                    <h2>No movies found</h2>
                    <img src='./image/not-found.png' alt='not found' style={{width:"200px", height:"200px"}} />
                </div>)
            }
            
        </div>
    )
}

export default MovieDashboard;