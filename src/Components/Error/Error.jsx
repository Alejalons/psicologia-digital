import './Error.scss';

function Error({message}) {
    return (
        <div className="alert-div alert alert-danger alert-dismissible fade show mr-3" role="alert">
            <strong>Se Genero un Error:</strong> <br/> 
            {message}
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    )
}

export default Error
