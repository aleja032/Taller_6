import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCats } from '../redux/catsThunk.js';
import { fetchDogs } from '../redux/dogsThunk';
import CardIndividual from '../components/CardIndividual.jsx';
import Loading from '../components/ui/Loading.jsx';

function AnimalList({ pag }) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCats());
        dispatch(fetchDogs());
    }, []);

    const cats = useSelector((state) => state.catAndDog.cats);
    const dogs = useSelector((state) => state.catAndDog.dogs);
    const favorites = useSelector((state) => state.catAndDog.favorites);
    const status = useSelector((state) => state.catAndDog.status);

    return (
        <div className="d-flex justify-content-center">
            <div className="const-list-cards">
                {status === 'loading' ? (
                    <Loading />
                ) : pag === 'cat' ?
                    cats.map((cat) => {
                        const isFavorite = favorites.some(fav => fav.id === cat.id);
                        return (
                            <CardIndividual
                                data={cat}
                                key={cat.id}
                                type='cat'
                                show={isFavorite}
                            />
                        );
                    }) : pag === 'dog' ?
                        dogs.map((dog) => {
                            const isFavorite = favorites.some(fav => fav.id === dog.id);
                            return (
                                <CardIndividual
                                    data={dog}
                                    key={dog.id}
                                    type='dog'
                                    show={isFavorite}
                                />
                            );
                        }) : pag== 'favorites' && favorites.length > 0 ?
                            favorites.map((item) =>
                                <CardIndividual
                                    data={item}
                                    key={item.id}
                                    type='favorites'
                                    show={true}
                                />
                            ) : <p className='ms-5'>There are no favorites available</p>
                }

            </div>
        </div>
    );
}; export default AnimalList;