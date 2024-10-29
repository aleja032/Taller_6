import '../assets/styles/home.css';
import Header from '../layouts/Header.jsx';
import OurMission from '../layouts/OurMission.jsx';
import CardNeeds from '../layouts/CardNeeds.jsx';
import HappyHistories from '../layouts/HappyHistories.jsx';
import Footer from '../layouts/Footer.jsx';
function Home() {
    return (
        <>
            <Header />
            <OurMission />
            <CardNeeds />
            <HappyHistories />
            <Footer />
        </>
    )
} export default Home;