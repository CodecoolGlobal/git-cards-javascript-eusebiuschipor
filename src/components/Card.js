const Card = ({username, totalRepos, avatar, setFavoriteRepo, repoURL, remove, id}) => {

    return (
        <>
            <div className="row justify-content-center m-5">
                <div className="card col-8">
                    <div className="card-body">
                        <img className="card-img-top" src={avatar} alt="Card image cap"/>
                        <h5 className="card-title text-center">{username}</h5>
                        <p className="card-text text-center">Total Repos: {totalRepos}</p>
                        <a href="#" onClick={() => remove(id)} className="card-link">Delete</a>
                        <a href="#" onClick={() => setFavoriteRepo(repoURL)} className="card-link">Pin top 3 repo's to nav</a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;