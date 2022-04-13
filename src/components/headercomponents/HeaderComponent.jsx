import { Link } from 'react-router-dom';
import './headerStyle.css';

const handleNavbar = () => {
    const navbarLinks = document.getElementsByClassName('navbar-links')[0];
        console.log('hello toggle');
        navbarLinks.classList.toggle('active');
}

const HeaderComponent = () => {
    return (
        <div >
            <nav className="navbar">
                <div className="brand-logo">
                    <span><img src='./image/logo-tree.svg' alt='logo'/></span>
                </div>
                <a href="#" className='toggle-button' onClick={handleNavbar}>
                    <span className='bar'></span>
                    <span className='bar'></span>
                    <span className='bar'></span>
                </a>
                <div className='navbar-links'>
                    <ul className='left-flex-items'>
                        <li>
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li>
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li>
                            <Link to="/quiz" className="nav-link">Quiz</Link>
                        </li>
                        <li>
                            <Link to='/movie' className='nav-link'>Movie</Link>
                        </li>
                        <li>
                            <Link to='/counter' className='nav-link'>Counter</Link>
                        </li>
                        <li>
                            <Link to='/products' className='nav-link'>Products</Link>
                        </li>
                        <li>
                            <Link to='pagination' className='nav-link'>Pagination</Link>
                        </li>
                    </ul>
                    <ul className='right-flex-items'>
                        <li>
                            <Link to='/counter' className='nav-link'>Logout</Link>
                        </li>
                        <li>
                            <Link to='/counter' className='nav-link'>Login</Link>
                        </li>
                        <li>
                        <Link to='/counter' className='nav-link'>Signup</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default HeaderComponent;