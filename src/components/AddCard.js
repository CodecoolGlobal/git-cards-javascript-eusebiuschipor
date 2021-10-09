import {useState} from 'react';

const AddCard = ({addNewUser}) => {
    const [gitUser, setGitUser] = useState("");

    const handleClickNewUser = () => {
        addNewUser(gitUser);
        setGitUser('');
    }
    
    return (
        <>
            <div className="row justify-content-center">
                <div className="col-6">
                    <input placeholder="enter github username" value={gitUser} onChange={e => setGitUser(e.target.value)}/>
                    <button onClick={handleClickNewUser}>Add new user</button>                    
                </div>
            </div>
        </>
    );
}

export default AddCard;