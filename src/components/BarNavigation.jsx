import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/icons/logo.svg';
import search from '../assets/icons/search.svg';
import '../assets/styles/barNavigation.css';

function BarNavigation() {
    const location = useLocation();
    const isHome = location.pathname === '/';

    return (
        <nav className={`navbar navbar-expand-lg px-0 pt-5 px-lg-5 nav_Main  ${isHome ? 'home-nav-style' : 'cats-nav-style'} `}>
            <div className="container-fluid">
                <Link to="/" className={`navbar-brand d-flex align-items-end mx-0 mx-lg-5 px-3 pe-5 custom-secciones  ${isHome ? 'custom-header' : 'custom-secciones-header'} `}>
                    {/* <img src={logo} alt="Logo" className=''/> */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" fill="currentColor" className="bi bi-house-heart-fill logo_svg" viewBox="0 0 16 16">
                        <path d="M7.293 1.5a1 1 0 0 1 1.414 0L11 3.793V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.293l2.354 2.353a.5.5 0 0 1-.708.707L8 2.207 1.354 8.853a.5.5 0 1 1-.708-.707z" />
                        <path d="m14 9.293-6-6-6 6V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5zm-6-.811c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.691 0-5.018" />
                    </svg>
                    <h6 className='ms-2 mb-0'>
                        Furry Connections
                    </h6>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon custom-toggler"></span>
                </button>
                <div className="collapse navbar-collapse m-0 me-lg-5 " id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto text-center p-3 p-lg-0">
                        <Link to="/" className="nav-link ms-2 pe-5">Home</Link>
                        <Link to="/cats" className="nav-link ms-2 pe-5">Cats</Link>
                        <Link to="/dogs" className="nav-link ms-2 pe-5">Dogs</Link>
                        <Link to="/favorites" className="nav-link ms-2 pe-5">My favorites</Link>
                    </div>
                    <div className="py-2 mx-4 mx-0  d-flex justify-content-center align-items-center custom-search  ">
                        <input type="text" placeholder='Search' className='border-0 input-search' />
                        <img src={search} alt="Search" className='' />
                    </div>
                </div>
            </div>
        </nav>
    )
} export default BarNavigation;