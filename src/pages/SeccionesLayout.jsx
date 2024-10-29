import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import leftTemplate from '../assets/images/left-template.webp';
import rightTemplate from '../assets/images/right-template.webp';
import TittleSection from '../components/ui/TittleSection.jsx';
import AnimalList from '../components/AnimalList.jsx';
import '../assets/styles/seccionesLayout.css';

function SeccionesLayout() {
    const location = useLocation();
    const pagCat = location.pathname === '/cats' ? 'yes' : 'no';
    const pagDog = location.pathname === '/dogs' ? 'yes' : 'no';

    return (
        <>
            <div className="row gx-0">
                <div className="col-12 col-lg-2 d-none d-sm-block d-md-block d-lg-block">
                    <img src={leftTemplate} alt="corner-img" className="img-fluid corner-section" />
                </div>
                <div className="col-12 col-lg-8 d-flex flex-column align-items-center ">
                    <div className="pt-5 text-center d-flex flex-column align-items-center encabezado-section">

                        <TittleSection title={pagCat === 'yes' || pagDog === 'yes' ? 'both' : 'favorites'} />

                        <p className='text-section text-start px-4 px-lg-0'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                </div>

                <div className="col-12 col-lg-2  mt-lg-2 pt-lg-5 d-none d-lg-flex justify-content-end align-items-start">
                    <img src={rightTemplate} alt="corner-img" className="mt-0 mt-lg-5 img-fluid corner-section" />
                </div>
            </div>

            <AnimalList pag={pagCat === 'yes' ? 'cat' : pagDog === 'yes' ? 'dog' : 'favorites'} />

        </>
    )
} export default SeccionesLayout;