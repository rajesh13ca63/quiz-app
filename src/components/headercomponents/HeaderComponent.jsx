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
                        <a className="nav-link navbar-text" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link navbar-text" href="#">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link navbar-text" href="#">Quiz</a>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        </div>
    )
}

export default HeaderComponent;