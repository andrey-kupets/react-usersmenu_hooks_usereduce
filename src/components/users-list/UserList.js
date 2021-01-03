import './UserList.css';
import Loading from "../../service/loading/Loading";
import { useReducer, useEffect } from 'react';
import { withRouter } from "react-router-dom";
import actFetchApi from "../../service/fetch-api/ActFetchApi";
import RenderUser from "../user/User";
import { apiReducer, } from "../../reducers/ApiReducer";
import ProvideFullUserInfo from "../full-userinfo/FullUserInfo";
import { detailInfoReducer } from "../../reducers/DetailInfoReducer";
import EditUserWindow from "../editUser-window/EditUserWindow";
import { editReducer } from "../../reducers/EditReducer";
import CreateUserWindow from "../createUser-window/CreateUserWindow";
import { createReducer } from "../../reducers/CreateReducer";

function ActUserList(props) {
    const [users, dispatchUsers] = useReducer(apiReducer, null);
    const [fullUserInfo, dispatchDetailInfo] = useReducer(detailInfoReducer, null);
    const [editUserWindow, dispatchEditDisplay] = useReducer(editReducer, '');
    const [createUserWindow, dispatchCreateDisplay] = useReducer(createReducer, '');

    useEffect(() => {
        const {match: {url}} = props;
        actFetchApi(url).then(json => dispatchUsers({type: 'SET_USERS', payload: json}))
    }, []);

    const clickForDetails = (info) => {
        dispatchDetailInfo({type: 'SET_DETAIL_INFO', payload: info})
    };

    const showEditUserWindow = () => {
        dispatchEditDisplay({type: 'EDITION_MENU_IS_VISIBLE', payload: 'visible'});
    };

    const saveEditedUser = (btnName, editedUser) => {
        if (btnName === 'save') {
            const savedUsers = users.filter(user => user.id !== editedUser.id);
            savedUsers.push(editedUser);
            savedUsers.sort((a, b) => a.id - b.id);
            dispatchUsers({type: 'SET_USERS', payload: savedUsers});
            dispatchDetailInfo({type: 'SET_DETAIL_INFO', payload: editedUser});
        } dispatchEditDisplay({type: 'EDITION_MENU_IS_VISIBLE', payload: ''});
    };

    const deleteUser = (id) => {
        const newUsers = users.filter(user => user.id !== id);
        dispatchUsers({type: 'SET_USERS', payload: newUsers});
        dispatchDetailInfo({type: 'SET_DETAIL_INFO', payload: ''});
        dispatchEditDisplay({type: 'EDITION_MENU_IS_VISIBLE', payload: ''});
    };

    const showCreateUserWindow = () => {
        dispatchCreateDisplay({type: 'CREATION_MENU_IS_VISIBLE', payload: 'visible'});
    };

    const createUser = (btnName, createdUser) => {
        if (btnName === 'create') {
            createdUser.id = users[users.length - 1].id + 1;
            users.push(createdUser);
            dispatchUsers({type: 'SET_USERS', payload: users});
        } dispatchCreateDisplay({type: 'CREATION_MENU_IS_VISIBLE', payload: ''});
    };

    if (users) {
        return (
            <div className={'parent'}>
                <div>
                    <h3>USERS LIST:</h3>
                    {!!users && users.map(user => <RenderUser user={user} key={user.id} details={clickForDetails}/>)}
                    <button onClick={showCreateUserWindow}>Create User</button>
                </div>
                {!!fullUserInfo && <ProvideFullUserInfo fullUserInfo={fullUserInfo} showEditUserWindow={showEditUserWindow} deleteUser={deleteUser}/>}
                {!!editUserWindow && <EditUserWindow fullUserInfo={fullUserInfo} saveEditedUser={saveEditedUser}/>}
                {!!createUserWindow && <CreateUserWindow createUser={createUser}/>}
            </div>
        );
    } return (
        <div>
            <h3>Pending USERS LIST:</h3>
            <Loading/>
        </div>
    );
}

export default withRouter(ActUserList);