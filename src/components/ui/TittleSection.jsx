function TittleSection({ title }) {
    return (
        <h2 className='pt-4 pb-4 title-section'>
            {title === 'both'
                ? <>Our Friends who are looking for a <span className='blue'>house</span></>
                : title === 'favorites'
                    ? "My favorites"
                    : null
            }
        </h2>
    );
} export default TittleSection;