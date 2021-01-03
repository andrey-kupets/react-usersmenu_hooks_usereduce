import { useReducer } from 'react';
import { userReducer } from "../../reducers/UserReducer";

export default function EditUserWindow(props) {
    const {fullUserInfo, saveEditedUser} = props;
    const {name, username, email, phone, website} = fullUserInfo;

    const [editedUser, dispatchEditedUser] = useReducer(userReducer, fullUserInfo);

    const inputName = (e) => dispatchEditedUser({type: 'INPUT_NAME', payload: e.target.value});
    const inputUsername = (e) => dispatchEditedUser({type: 'INPUT_USERNAME', payload: e.target.value});
    const inputEmail = (e) => dispatchEditedUser({type: 'INPUT_EMAIL', payload: e.target.value});
    const inputPhone = (e) => dispatchEditedUser({type: 'INPUT_PHONE', payload: e.target.value});
    const inputWebsite = (e) => dispatchEditedUser({type: 'INPUT_WEBSITE', payload: e.target.value});

    return (
        <div>
            <h3>USER EDITION MENU:</h3>
            <div>
                <label>Name:</label>
                <input onInput={inputName} type="text" defaultValue={name}/>
            </div>
            <div>
                <label>UserName:</label>
                <input onInput={inputUsername} type="text" defaultValue={username}/>
            </div>
            <div>
                <label>Email:</label>
                <input onInput={inputEmail} type="text" defaultValue={email}/>
            </div>
            <div>
                <label>Phone:</label>
                <input onInput={inputPhone} type="text" defaultValue={phone}/>
            </div>
            <div>
                <label>Website:</label>
                <input onInput={inputWebsite} type="text" defaultValue={website}/>
            </div>
            <div>
                <button onClick={() => saveEditedUser('save', editedUser)}>Save</button>
                <button onClick={saveEditedUser}>Cancel</button>
            </div>
        </div>
    )
}