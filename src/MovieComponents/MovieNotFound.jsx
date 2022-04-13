const MovieNotFound = (props) => {
    if(!props.value)
        return ( (<div className='empty'>
        <h2>No movies found</h2>
        <img src='./image/not-found.png' alt='not found' style={{width:"200px", height:"200px"}} />
        </div>))
    else return null;
}
export default MovieNotFound;
