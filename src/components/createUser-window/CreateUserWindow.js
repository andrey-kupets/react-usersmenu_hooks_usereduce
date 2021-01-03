import { useReducer } from 'react';
import { userReducer } from "../../reducers/UserReducer";

export default function CreateUserWindow(props) {
    const {createUser} = props;
    const initialState = {id: '...missed data', name: '...missed data', username: '...missed data', email: '...missed data', phone: '...missed data', website: '...missed data'};
    const [createdUser, dispatchCreatedUser] = useReducer(userReducer, initialState);

    const inputName = (e) => dispatchCreatedUser({type: 'INPUT_NAME', payload: e.target.value});
    const inputUsername = (e) => dispatchCreatedUser({type: 'INPUT_USERNAME', payload: e.target.value});
    const inputEmail = (e) => dispatchCreatedUser({type: 'INPUT_EMAIL', payload: e.target.value});
    const inputPhone = (e) => dispatchCreatedUser({type: 'INPUT_PHONE', payload: e.target.value});
    const inputWebsite = (e) => dispatchCreatedUser({type: 'INPUT_WEBSITE', payload: e.target.value});

    return (
        <div>
            <h3>USER CREATION MENU:</h3>
            <div>
                <label>Name:</label>
                <input onInput={inputName} type="text"/>
            </div>
            <div>
                <label>UserName:</label>
                <input onInput={inputUsername} type="text"/>
            </div>
            <div>
                <label>Email:</label>
                <input onInput={inputEmail} type="text"/>
            </div>
            <div>
                <label>Phone:</label>
                <input onInput={inputPhone} type="text"/>
            </div>
            <div>
                <label>Website:</label>
                <input onInput={inputWebsite} type="text"/>
            </div>
            <div>
                <button onClick={() => createUser('create', createdUser)}>Create</button>
                <button onClick={createUser}>Cancel</button>
            </div>
        </div>
    )
}