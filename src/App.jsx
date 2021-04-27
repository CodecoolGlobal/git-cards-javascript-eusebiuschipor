import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';

const App = () => {
    const [gitUser, setGitUser] = useState("")
    const [cardList, setCardList] = useState([])
    const [favoriteRepoList, setFavoriteRepoList] = useState([])
    const [error, setError] = useState("")



    const addNewUser = () => {
    }

    const remove = () => {
    }

    const setFavoriteRepo = () => {
    }

    return (
        <div>
            <div style={{position: 'fixed', top:0, width: '100%', zIndex: 1}}>
                <div className="row bg-info">
                    {favoriteRepoList.map(repo =>
                        <div className="col-4 text-center">{repo.name}</div>
                    )}
                </div>
            </div>

            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-6">
                        <input placeholder="enter github username" value={gitUser} onChange={e => setGitUser(e.target.value)}/>
                        <button onClick={addNewUser}>Add new user</button>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-6">
                        {error ? error : ""}
                    </div>
                </div>
                <div key={1} className="row justify-content-center m-5">
                    <div className="card col-8">
                        <div className="card-body">
                            <img className="card-img-top" src="https://avatars.githubusercontent.com/u/19682793?v=4" alt="Card image cap"/>
                            <h5 className="card-title text-center">Random User</h5>
                            <p className="card-text text-center">Total Repos: 5</p>
                            <a href="#" className="card-link">Delete</a>
                            <a href="#" className="card-link">Pin top 3 repo's to nav</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default App;
