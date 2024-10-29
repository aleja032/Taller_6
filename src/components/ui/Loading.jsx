import '../../assets/styles/loading.css';

function Loading() {
    return (
        <div className="d-flex flex-column align-items-center justify-content-center loading-container">
            <div className="mb-2 spinner-border p-4 spinner" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            Loading...
        </div>
     
        
    );
}; export default Loading 