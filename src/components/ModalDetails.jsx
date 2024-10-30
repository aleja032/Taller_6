
import '../assets/styles/modalDetails.css'
import heart from '../assets/icons/heart.svg';
import reply from '../assets/icons/reply.svg'

function ModalDetails({ data, type }) {
    return (
        <div className={`modal fade`} id={`modalDetails${data.id}`} tabIndex="-1" aria-hidden="true">
            <div className="modal-dialog  modal-lg modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body d-flex flex-column flex-lg-row  align-items-center align-items-lg-start">
                        <div className="my-4 d-flex flex-column justify-content-center align-items-center">
                            {data.image && (
                                <img src={data.image.url} alt="cat" className="img-fluid modal-img" />
                            )}
                            {data.wikipedia_url && < p className='mb-2 text-gray-wiki'>Link to Wikipedia: <a href={data.wikipedia_url} target="_blank" rel="noreferrer">Ver en Wikipedia</a></p>}

                            <div className="d-flex">
                                {data.weight && data.weight.metric && <p className='text-gray'>weight: {data.weight.metric} kg</p>}
                                {data.energy_level && <p className='ms-3 text-gray'>Energy level: {data.energy_level}</p>}
                            </div>
                            <div className="d-flex flex-column flex-lg-row p-2">
                                <button type="button"  className=" btn py-2 py-lg-1 py-xl-2 px-4 btn-consider">
                                    Consider it
                                    <img src={heart} alt="heart" className="ms-0 ms-xl-2 img-fluid" />
                                </button>
                                <button type="button" className="btn mt-2 ms-lg-2 mt-lg-0 py-2 py-lg-1 py-xl-2 px-4 d-flex align-items-center btn-more">
                                    Share link
                                    <img src={reply} alt="reply" className="ms-0 ms-xl-2 img-fluid" />
                                </button>
                            </div>
                        </div>

                        <div className="d-flex flex-column align-items-center   modal-info">
                           <div className="text-center">
                                <h5 className="mb-2 modal-titulo">{data.name}</h5>
                                {data.alt_names && <p className='mb-2 text-gray_'> {data.alt_names}</p>}
                            </div>
                            <p className='description-modal'>{data.description && data.description}</p>
                            <div className="d-flex cont-modal">
                                <ul className="">
                                    {data.stranger_friendly && <li className='mb-2'> <span className='weight-medium'>Stranger friendly: </span> {data.stranger_friendly} </li>}
                                    {data.child_friendly && <li className='mb-2'><span className='weight-medium'>Child friendly: </span > {data.child_friendly}</li>}
                                    {data.dog_friendly && <li className='mb-2'><span className='weight-medium'>Dog friendly: </span > {data.dog_friendly}</li>}
                                </ul>
                                <ul className="">
                                        {data.social_needs && <li className='mb-2'><span className='weight-medium'>Social needs: </span> {data.social_needs}</li>}
                                        {data.shedding_level && <li className='mb-2'><span className='weight-medium'>Shedding level: </span> {data.shedding_level}</li>}
                                        {data.affection_level && <li className='mb-2'><span className='weight-medium'>Level of affection: </span> {data.affection_level}</li>}
                                </ul>
                            </div>
                            {data.temperament && <p className='cont-modal'><strong className=''>Temparament:</strong> {data.temperament}</p>}
                            <div className="d-flex justify-content-around cont-modal">
                                {data.adaptability && <p><span className='weight-medium'>Adaptability:</span> {data.adaptability}</p>}
                                {data.health_issues && <p><span className='weight-medium'>Health issues:</span> {data.grooming}</p>}
                                {data.intelligence && <p><span className='weight-medium'>Intelligence:</span> {data.intelligence}</p>}
                            </div>
                            <div className="cont-modal">
                                    {data.breed_group && <p><strong>Grupo de Raza:</strong> {data.breed_group}</p>}
                                    {data.bred_for && <p><strong>Propósito de Raza:</strong> {data.bred_for}</p>}
                                    {data.height && data.height.metric && <p><strong>Altura:</strong> {data.height.metric} cm</p>}
                            </div>
                            <div className="d-flex cont-modal">
                                {data.life_span && <p className='ms-4'><strong className='weight-medium'>Life span:</strong> {data.life_span}</p>}
                                {data.grooming && <p className='ms-5'><span className='weight-medium'>Grooming:</span> {data.grooming}</p>}
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}export default ModalDetails;
