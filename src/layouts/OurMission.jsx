import petsLove from '../assets/images/lovePets.webp';
import health from '../assets/images/health.webp';
import world from '../assets/images/world.webp';

function OurMission() {
    return (
        <div className="d-flex flex-column mt-lg-5 bg_Mission">
            <h3 className='mt-5 mb-5 text-center mission-title'>Our Mision</h3>
            <div className="row gx-0  justify-content-center p-4">
                <div className="col-12 col-lg-3 d-flex flex-column align-items-center justify-content-start">
                    <div className="d-flex justify-content-center align-items-center cont-icon-mission">
                        <img src={petsLove} alt="health" className="img-fluid icon-mission" />
                    </div>
                    <h5 className='mt-3 mission-sub'>
                        Finding Forever Homes
                    </h5>
                    <p className="px-4 text-center mission-size">
                        We match pets with families who are ready to provide a loving and stable environment.
                    </p>
                </div>
                <div className="mt-4 mt-lg-0 col-12 col-lg-3 d-flex flex-column align-items-center justify-content-start">
                    <div className="d-flex justify-content-center align-items-center cont-icon-mission">
                        <img src={health} alt="health" className="img-fluid icon-mission" />
                    </div>
                    <h5 className='mt-3 mission-sub'>
                        Ensuring Pet Health
                    </h5>
                    <p className="px-4 text-center mission-size">
                        We advocate for regular veterinary care, proper nutrition, and exercise to keep pets healthy and thriving.
                    </p>
                </div>
                <div className="mt-4 mt-lg-0 col-12 col-lg-3 d-flex flex-column align-items-center justify-content-start">
                    <div className="d-flex justify-content-center align-items-center cont-icon-mission">
                        <img src={world} alt="health" className="img-fluid icon-mission" />
                    </div>
                    <h5 className='mt-3 mission-sub'>
                        Raising Awareness
                    </h5>
                    <p className="ps-4 text-center mission-size">
                        We work to educate the community about the challenges faced by street and abandoned animals, promoting responsible pet ownership.
                    </p>
                </div>
            </div>
        </div>
    )
} export default OurMission;