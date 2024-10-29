import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../assets/styles/seccionesLayout.css';
import leftTemplate from '../assets/images/left-template.webp';
import rightTemplate from '../assets/images/right-template.webp';
import CatService from '../services/catService.js';
import DogService from '../services/dogService.js';
import TittleSection from '../components/TittleSection.jsx';
import CardIndividual from '../components/CardIndividual.jsx';

function SeccionesLayout() {
      const location = useLocation();
      const favorites = useSelector((state) => state.favorites);
      const pagCat = location.pathname === '/cats' ? 'yes' : 'no';
      const pagDog = location.pathname === '/dogs' ? 'yes' : 'no';

        if (favorites.favorites && Array.isArray(favorites.favorites)) {
            console.log("El objeto tiene datos:", favorites.favorites.length, favorites.favorites);
        } else {
            console.log("No hay datos en el array de favoritos.");
        }

      console.log('rutas: ', pagCat);
      const [cats, setCats] = useState([]);
      const [dogs, setDogs] = useState([]);

      const getCat = async () => {
          const dataCats = await CatService.getCats();
          console.log('dataCats:', dataCats); 
          setCats(dataCats); 
      };
      const getDog = async () => {
          const dataDogs = await DogService.getDogs();
          setDogs(dataDogs); 
          console.log('dataDogs:', dataDogs); 
      }
      useEffect(() => {
          getCat();
          getDog();
      }, []); 
  

    return (
        <>
        <div className="row gx-0">
            <div className="col-12 col-lg-2 d-none d-sm-block d-md-block d-lg-block">
                <img src={leftTemplate} alt="corner-img" className="img-fluid corner-section" />
            </div>
            <div className="col-12 col-lg-8 d-flex flex-column align-items-center ">
                <div className="pt-5 text-center d-flex flex-column align-items-center encabezado-section">

                    <TittleSection title = {pagCat === 'yes' || pagDog === 'yes' ? 'both' : 'favorites'} />
                    
                    <p className='text-section text-start px-4 px-lg-0'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    </p>
                </div>
            </div>

            <div className="col-12 col-lg-2  mt-lg-2 pt-lg-5 d-none d-lg-flex justify-content-end align-items-start">
                <img src={rightTemplate} alt="corner-img" className="mt-0 mt-lg-5 img-fluid corner-section" />
            </div>
        </div>

        {/* Deberia crear un componente para renderizar la lista de gatos o perros*/}
        <div className="d-flex justify-content-center">
             <div className="const-list-cards">
             {pagCat === 'yes' ? 
                cats.map((cat) => {
                    const isFavorite = favorites.favorites.some(fav => fav.id === cat.id); // Verifica si el animal ya está en favoritos
                    return (
                        <CardIndividual 
                            data={cat} 
                            key={cat.id} 
                            type='cat' 
                            show={isFavorite} // Si ya es favorito, show será false
                        />
                    );
                }) : pagDog === 'yes' ? 
                dogs.map((dog) => {
                    const isFavorite = favorites.favorites.some(fav => fav.id === dog.id); // Misma lógica para perros
                    console.log("Valor de show: ", isFavorite); // Mostrará el valor invertido
                    return (
                        <CardIndividual 
                            data={dog} 
                            key={dog.id} 
                            type='dog' 
                            show={isFavorite} // Si ya es favorito, show será false
                        />
                    );
                }) : favorites.favorites.length > 0 ?
                    favorites.favorites.map((item) => 
                        <CardIndividual 
                            data={item} 
                            key={item.id} 
                            type='favorites' 
                            show={true} // Los favoritos siempre muestran show como true
                        />
                    ) : <p>No hay favoritos disponibles</p>
            }

             </div>
        </div>     
      
        </>
    )
} export default SeccionesLayout;