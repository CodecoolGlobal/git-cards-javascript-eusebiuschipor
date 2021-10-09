const Error = ({error}) => {
    return (
        <>
            <div className="row justify-content-center">
                <div className="col-6">
                    {error ? error : ""}
                </div>
            </div>
        </>
    );
}

export default Error;