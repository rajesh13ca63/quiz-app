import { Link } from 'react-router-dom';
import './headerStyle.css';

const HeaderComponent = () => {
    return (
        <div >
            <nav className="navbar navbar-expand-lg header-bg">
                <div className='container'>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">

                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link to="/" className="nav-link navbar-text" >Home</Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link navbar-text" href="#">About</a>
                    </li>
                    <li className="nav-item">
                        <Link to="/quiz" className="nav-link navbar-text">Quiz</Link>
                    </li>
                    <li>
                        <Link to='/movie' className='nav-link navbar-text'>Movie</Link>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        </div>
    )
}

export default HeaderComponent;