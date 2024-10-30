import heart from '../../assets/icons/heart.svg';
import { useDispatch } from 'react-redux';
import { addFavorite } from '../../redux/slice.js';

function ButtonConsider({ data, show}) {
    const dispatch = useDispatch();

    function handleFavorite(data) {
        dispatch(addFavorite(data));    
    }
    return (
        <button
            type="button"
            className="btn py-0 py-lg-1 py-xl-2 px-3 btn-consider"
            onClick={() => handleFavorite(data)
            }
            disabled={show}
        >
            Consider it
            <img src={heart} alt="heart" className="ms-0 ms-xl-2 img-fluid" />
        </button>
    )
}; export default ButtonConsider;