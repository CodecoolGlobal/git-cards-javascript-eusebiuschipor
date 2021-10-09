import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar';
import AddCard from './components/AddCard';
import Error from './components/Error';
import Card from './components/Card';
import axios from 'axios';

const App = () => {
    const [cardList, setCardList] = useState([]);
    const [favoriteRepoList, setFavoriteRepoList] = useState([]);
    const [error, setError] = useState("");

    

    const addNewUser = (gitUser) => {
        console.log(gitUser);

        axios
            .get(`https://api.github.com/users/${gitUser}`)
            .then((response) => {
                let duplicateCard = false;

                cardList.forEach(card => {
                    if (card.id === response.data.id) {
                        duplicateCard = true;
                    }
                })

                if (duplicateCard) {
                    setError('User already exists');
                } else {
                    cardList.push(response.data)
                    setCardList([...cardList])
                    setError('') 
                }
            })
            .catch((error) => {
                setError('User does not exist')
        })

            
    }

    const remove = (id) => {
        let newCardList = [];

        cardList.forEach(card => {
            if (card.id !== id) {
                newCardList.push(card)
            }
        })

        setCardList(newCardList);
    }

    const setFavoriteRepo = (repoURL) => {
        axios
            .get(repoURL)
            .then((response) => {
                console.log(response.data);
                for (let i=0; i < 3 && i < response.data.length; i++) {
                    favoriteRepoList.push(response.data[i]);
                }
                setFavoriteRepoList([...favoriteRepoList]);
            })
            .catch(() => {
                console.log('Error')
            })
    }

    // "login": "andreiursan23",
    // "id": 86486259,
    // "node_id": "MDQ6VXNlcjg2NDg2MjU5",
    // "avatar_url": "https://avatars.githubusercontent.com/u/86486259?v=4",
    // "gravatar_id": "",
    // "url": "https://api.github.com/users/andreiursan23",
    // "html_url": "https://github.com/andreiursan23",
    // "followers_url": "https://api.github.com/users/andreiursan23/followers",
    // "following_url": "https://api.github.com/users/andreiursan23/following{/other_user}",
    // "gists_url": "https://api.github.com/users/andreiursan23/gists{/gist_id}",
    // "starred_url": "https://api.github.com/users/andreiursan23/starred{/owner}{/repo}",
    // "subscriptions_url": "https://api.github.com/users/andreiursan23/subscriptions",
    // "organizations_url": "https://api.github.com/users/andreiursan23/orgs",
    // "repos_url": "https://api.github.com/users/andreiursan23/repos",
    // "events_url": "https://api.github.com/users/andreiursan23/events{/privacy}",
    // "received_events_url": "https://api.github.com/users/andreiursan23/received_events",
    // "type": "User",
    // "site_admin": false,
    // "name": null,
    // "company": null,
    // "blog": "",
    // "location": null,
    // "email": null,
    // "hireable": null,
    // "bio": null,
    // "twitter_username": null,
    // "public_repos": 7,
    // "public_gists": 0,
    // "followers": 0,
    // "following": 2,
    // "created_at": "2021-06-25T16:12:07Z",
    // "updated_at": "2021-10-04T13:13:00Z"

    return (
        <div>
            <Navbar favoriteRepoList={favoriteRepoList} cardList={cardList} />

            <div className="container mt-5">
                <AddCard addNewUser={addNewUser} />

                <Error error={error} />
                
                {cardList.map((card) => 
                    <Card 
                        username={card.login} 
                        totalRepos={card.public_repos} 
                        avatar={card.avatar_url} 
                        key={card.id} 
                        setFavoriteRepo={setFavoriteRepo} 
                        repoURL={card.repos_url}
                        remove={remove}
                        id={card.id}
                    />
                )}
                
            </div>
        </div>
    )
};

export default App;


