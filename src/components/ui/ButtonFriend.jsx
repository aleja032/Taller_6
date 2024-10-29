import user from '../../assets/icons/user.svg';
import '../../assets/styles/buttonFriend.css';

function ButtonFriend({ backgroundColor }) {
    return (
        <button className='px-4 py-3 d-flex align-items-center justify-content-center button-friend' style={{ backgroundColor: backgroundColor }}>
            Find a friend 
            <img src={user} alt="user_love" className="ms-2 customs_size" />
        </button>
    )
} export default ButtonFriend;