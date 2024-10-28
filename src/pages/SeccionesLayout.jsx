import { useEffect, useState } from 'react';
import '../assets/styles/seccionesLayout.css';
import leftTemplate from '../assets/images/left-template.webp';
import rightTemplate from '../assets/images/right-template.webp';
import CatService from '../services/catService.js';
import DogService from '../services/dogService.js';
function SeccionesLayout() {
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
      }, []); // El array vacío asegura que se ejecute solo al montar el componente
  

    return (
        <>
        <div className="row gx-0">
            <div className="border col-12 col-lg-2 d-none d-sm-block d-md-block d-lg-block">
                <img src={leftTemplate} alt="corner-img" className="img-fluid corner-section" />
            </div>
            <div className="border col-12 col-lg-8 d-flex flex-column align-items-center ">
                <div className="pt-5 text-center d-flex flex-column align-items-center encabezado-section">
                    <h2 className='pt-5 pb-4 title-section '>Our Friends who are looking for a <span className='blue'>house</span></h2>
                    <p className='text-section text-start px-4 px-lg-0'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    </p>
                </div>
                    <div className="row border gap-2 justify-content-center mt-5">
                        <div className="col-12">
                            {/* Muestra la imagen solo si hay gatos */}
                            {cats.length > 0 && 
                            
                            <img src={cats[0].url} alt="cat" className="img-fluid" />}
                             {cats.length > 0 && <h1>{cats[0].id}</h1>}
                        </div>
                        <div className="col-12">
                            {dogs.length > 0 && <img src={dogs[0].url} alt="cat" className="img-fluid" />}
                        </div>
                        {/* <div className="border col-12 p-5 col-lg-5">2</div>
                        <div className="border col-12 p-5 col-lg-5">2</div>
                        <div className="border col-12 p-5 col-lg-5">3</div>
                        <div className="border col-12 p-5 col-lg-5">4</div>
                        <div className="border col-12 p-5 col-lg-5">2</div>
                        <div className="border col-12 p-5 col-lg-5">2</div>
                        <div className="border col-12 p-5 col-lg-5">3</div>
                        <div className="border col-12 p-5 col-lg-5">4</div>
                        <div className="border col-12 p-5 col-lg-5">2</div>
                        <div className="border col-12 p-5 col-lg-5">2</div>
                        <div className="border col-12 p-5 col-lg-5">3</div>
                        <div className="border col-12 p-5 col-lg-5">4</div> */}
                    </div>
          
            </div>

            <div className="border col-12 col-lg-2  mt-lg-5 pt-lg-5 d-none d-lg-flex justify-content-end align-items-start">
                <img src={rightTemplate} alt="corner-img" className="mt-0 mt-lg-5 img-fluid corner-section" />
            </div>
        </div>
        {/* <div className="row gx-0 border">
            <div className="p-3 border col-lg-1">

            </div>
            <div className="p-3 border col-lg-10">
                  <div className="row border justify-content-center gap-3 mt-5">
                    <div className="border col-12 p-5 col-lg-5">2</div>
                    <div className="border col-12 p-5 col-lg-5">2</div>
                    <div className="border col-12 p-5 col-lg-5">3</div>
                    <div className="border col-12 p-5 col-lg-5">4</div>
                    <div className="border col-12 p-5 col-lg-5">2</div>
                    <div className="border col-12 p-5 col-lg-5">2</div>
                    <div className="border col-12 p-5 col-lg-5">3</div>
                    <div className="border col-12 p-5 col-lg-5">4</div>
                    <div className="border col-12 p-5 col-lg-5">2</div>
                    <div className="border col-12 p-5 col-lg-5">2</div>
                    <div className="border col-12 p-5 col-lg-5">3</div>
                    <div className="border col-12 p-5 col-lg-5">4</div>
                </div>
            </div>
            <div className="p-3 border col-lg-1">
            
            </div>
        </div> */}
        </>
    )
} export default SeccionesLayout;