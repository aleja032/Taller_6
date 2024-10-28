import '../assets/styles/home.css';
import owner_cat from '../assets/images/owner_cat.jpg';
import owner_dog from '../assets/images/owner_dog.jpg';
import girl_cat from '../assets/images/girl_cat.jpg';
import arrow_left from '../assets/icons/arrow_left.svg';
import arrow_right from '../assets/icons/arrow_right.svg';
import star from '../assets/icons/star.svg';

function HappyHistories() {
    return (
        <div className="mt-5 pt-lg-5  bg_happy">
            <h3 className='pt-5 mt-5 text-center happy-title'>Happy Histories</h3>
            <div className="row pt-5 justify-content-center gx-0">
                <div className="col-12 col-lg-3 d-flex align-items-start justify-content-start justify-content-lg-center">
                    <img src={owner_dog} alt="owner_cat" className="ms-5 m-lg-0 img-fluid happy_img" />
                </div>
                <div className="col-12 col-lg-5 px-2 px-md-5 px-lg-5">
                    <div className="position-relative cont-img-happy">
                        <img src={girl_cat} alt="girl_cat" className="position-absolute img-fluid happy_img_center" />
                    </div>
                    <div className="p-5 happy_cont">
                        <p className='mb-0 text-center text-white happy-paragraph'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <p className='text-center text-white'>#BestFriend</p>
                        <div className="mt-0 mt-lg-4 d-flex justify-content-center">
                            <img src={star} alt="star" className="ms-2 img-fluid" />
                            <img src={star} alt="star" className="ms-2 img-fluid" />
                            <img src={star} alt="star" className="ms-2 img-fluid" />
                            <img src={star} alt="star" className="ms-2 img-fluid" />
                            <img src={star} alt="star" className="ms-2 img-fluid" />

                        </div>
                    </div>
                    <div className="mt-5 text-center">
                        <img src={arrow_left} alt="arrow_left" className=" arrows" />
                        <img src={arrow_right} alt="arrow_right" className="ms-5 arrows" />
                    </div>
                </div>
                <div className="col-12 col-lg-3 mb-0 mb-lg-5 mt-3 mt-lg-0 d-flex align-items-end justify-content-end justify-content-lg-center ">
                    <img src={owner_cat} alt="owner_cat" className="me-5 m-lg-0 img-fluid happy_img" />
                </div>
            </div>
        </div>
    );
}; export default HappyHistories;