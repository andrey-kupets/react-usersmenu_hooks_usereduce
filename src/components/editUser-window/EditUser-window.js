import { useReducer } from 'react';
import {editedUsersReducer} from "../../reducers/EditedUsersReducer";


export default function EditUserWindow(props) {
    const {fullUserInfo, saveEditUser} = props;
    const {name, username, email, phone, website} = fullUserInfo;

    const [editedUsers, dispatchEditedUsers] = useReducer(editedUsersReducer, fullUserInfo);

    const inputName = (e) => dispatchEditedUsers({type: 'INPUT_NAME', payload: e.target.value});
    const inputUserName = (e) => dispatchEditedUsers({type: 'INPUT_USERNAME', payload: e.target.value});
    const inputEmail = (e) => dispatchEditedUsers({type: 'INPUT_EMAIL', payload: e.target.value});
    const inputPhone = (e) => dispatchEditedUsers({type: 'INPUT_PHONE', payload: e.target.value});
    const inputWebsite = (e) => dispatchEditedUsers({type: 'INPUT_WEBSITE', payload: e.target.value});

    return (
        <div>
            <h3>USER EDITION MENU:</h3>
            <div>
                <label>Name:</label>
                <input onInput={inputName} type="text" defaultValue={name}/>
            </div>
            <div>
                <label>UserName:</label>
                <input onInput={inputUserName} type="text" defaultValue={username}/>
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
                <button onClick={() => saveEditUser('save', editedUsers)}>Save</button>
                <button onClick={saveEditUser}>Cancel</button>
            </div>
        </div>
    )
}