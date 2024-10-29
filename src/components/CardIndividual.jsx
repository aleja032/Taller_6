import heart from '../assets/icons/heart.svg';
import '../assets/styles/cardIndividual.css';


function CardIndividual({ data, type }) {
    console.log('data:', data);
    console.log(data.image && 'si hay');
    return (
            <div className="card mb-4 ">
                <div className="mt-3 cont-card  d-flex justify-content-center position-relative">
                    <div className="bg-blue"></div>
                    {data.image && (
                        <img src={data.image.url} alt="cat" className="position-absolute img-fluid card-img" />
                    )}
                </div>
            
                <div className="card-body d-flex flex-column justify-content-around ">
                    <h5 className="card-title">{data.name}</h5>
                    <p className="card-text card-description mb-0">
                        {data.description && 
                            data.description.split('.')[0]
                        }
                    </p>
                    <p className="mt-1 card-text card-temperament">
                        <span className='card-sub-title'>Temperament: </span>
                        {data.temperament}
                    </p>
                    {!data.description &&
                        <div className="border-bottom mb-2 d-flex justify-content-around card-gray">
                            <p className="mb-0">
                                <span className='card-gray-span'>Breed group: </span>
                                {data.breed_group ? data.breed_group : 'unknown'}
                            </p>
                            <p className="mb-0">
                                <span className='card-gray-span'>Height:  </span>
                                {data.height.metric}
                            </p>
                        </div> 
                    }
                
                    <div className="border-bottom mb-3 d-flex justify-content-around card-gray">
                        <p className="mb-0">
                            <span className='card-gray-span'>Origin: </span>
                            {data.origin ? data.origin : 'unknown'}
                        </p>
                        <p className="mb-0">
                          <span className='card-gray-span'>weight: </span>
                          {data.weight.metric}
                        </p>
                    </div>
                    
                    <div className="d-flex justify-content-around align-items-center ">
                        <button type="button" className="btn py-0 py-lg-1 py-xl-2 px-4 btn-more" >	
                            Know More...
                        </button>
                        
                        <button type="button"  className=" btn py-0 py-lg-1 py-xl-2 px-4 btn-consider">
                            Consider it 
                            <img src={heart} alt="heart" className="ms-0 ms-xl-2 img-fluid" />
                        </button>
                    </div>
                </div>
            </div>
    );
}

export default CardIndividual;
