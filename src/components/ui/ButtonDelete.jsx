import { useDispatch } from 'react-redux';
import { deleteFavorite } from '../../redux/slice.js';
import remove from '../../assets/icons/delete.svg';

function ButtonDelete({ id }) {
    const dispatch = useDispatch();
    
    const handleDelete = (id) => {
        dispatch(deleteFavorite(id));
    };

    return (
        <button
            type="button"
            className="btn py-0 ms-3 btn-delete"
            onClick={() => handleDelete(id)
            }
        >
            <img src={remove} alt="remove" className="ms-0 ms-xl-2 img-fluid" />
        </button>
    )
}; export default ButtonDelete;