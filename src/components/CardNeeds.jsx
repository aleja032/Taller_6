import '../assets/styles/home.css';
import ButtonFriend from './ButtonFriend';
import poorCat from '../assets/icons/poorCat.svg';
function CardNeeds() {
    return (
        <div className="mt-5 needs-bg">
            <div className="row justify-content-center gx-0 needs-row">
                <div className="d-none d-lg-flex col-12 col-lg-1">
                </div>

                <div className=" col-12 col-lg-5 position-relative d-flex  needs-imgs">
                    <img src={poorCat} alt="" className="ms-5 img-fluid needs-cat" />
                </div>
                <div className="col-12 col-lg-6 ">
                    <h3 className='mb-4 mt-4 mt-lg-0 pb-2 needs-title'>They need you </h3>
                    <p className='px-4 px-0 needs-paragraph'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                        <br />
                        <br />
                        <br />
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        <br />
                        <br />
                        <br />
                        deserunt mollit anim id est laborum.
                    </p>
                    <div className="ms-lg-4 mt-4 d-flex justify-content-center justify-content-lg-start">
                        <ButtonFriend backgroundColor="#71C5EB" />
                    </div>
                </div>
            </div>
        </div>
    )
} export default CardNeeds;