import mainPicture from '../assets/images/mainPicture.webp';
import bg_header from '../assets/icons/bg-header.svg';
import ButtonFriend from '../components/ui/ButtonFriend';

function Header() {
  return (
    <header className='pb-4'>
      <div className="row gx-0 prueba">
        <div className="col-12 col-lg-7 col-xl-6">
          <div className="position-relative">
            <img src={bg_header} alt="" className="header_bg" />
            <img src={mainPicture} alt="" className="position-absolute img-fluid header_picture" />
          </div>
        </div>
        <div className="mb-5 col-12 col-lg-5 col-xl-5 text-center d-flex flex-column align-items-center header_top">
          <h1 className='header_title'>
            Your Perfect <span className='blue'> Match Awaits </span>
          </h1>
          <p className='mt-3 mb-4 header_paragraph'>
            Many furry friends have faced challenges and are eager to share their love. Adopting a street animal saves a life and brings joy to your home.
            Open your heart and discover the perfect match waiting  <span className='blue'> for you! </span>
          </p>
          <ButtonFriend backgroundColor="#85E3CC" />
        </div>
      </div>
    </header>

  );
} export default Header;