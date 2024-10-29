import whatsapp from '../assets/icons/whatsapp.svg';
import facebook from '../assets/icons/facebook.svg';
import instagram from '../assets/icons/instagram.svg';

function Footer() {
    return (
        <footer className="mt-5 py-5 px-4 px-lg-0 row gx-0 justify-content-center footer_bg">
            <div className="col-12 col-md-6 col-lg-2 px-3">
                <p className="">
                    Our Social Media
                </p>
                <ul className='d-flex justify-content-between me-4 list-unstyled'>
                    <li className='p-2 text-center footer_icons'>
                        <img src={whatsapp} alt="whatsapp" className="img-fluid" />
                    </li>
                    <li className='p-2 text-center footer_icons'>
                        <img src={facebook} alt="facebook" className="img-fluid" />
                    </li>
                    <li className='p-2 text-center footer_icons'>
                        <img src={instagram} alt="instagram" className="img-fluid" />
                    </li>
                </ul>
            </div>
            <div className="col-12 col-md-6 col-lg-2  d-flex justify-content-center">
                <ul className='list-unstyled'>
                    <li className='mb-4'>
                        Privacy Policy
                    </li>
                    <li className=''>
                        Terms of Service
                    </li>
                </ul>
            </div>
            <div className="col-12 col-md-6 col-lg-3 d-flex justify-content-center">
                <ul className='list-unstyled'>
                    <li className='mb-4'>
                        Location: Avenida 30A - Miami
                    </li>
                    <li className=''>
                        © 2024 FurryConnections. All rights reserved.
                    </li>
                </ul>
            </div>
        </footer>
    );
}; export default Footer;