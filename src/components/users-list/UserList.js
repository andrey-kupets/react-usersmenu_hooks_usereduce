import './UserList.css';
import { useState } from 'react';
import Loading from "../../service/loading/Loading";
import { useReducer, useEffect } from 'react';
import { withRouter } from "react-router-dom";
import actFetchApi from "../../service/fetch-api/ActFetchApi";
import RenderUser from "../user/User";
// import reducerApi from "../../reducers/ApiReducer";


function ActUserList(props) {
    const [users, setUsers] = useState(null);

    // const [state, dispatch] = useReducer(reducerApi, initialState);
    useEffect(() => {
        const {match: {url}} = props;
        actFetchApi(url).then(json => setUsers(json))
    }, [])

    if (users) {
        return (
            <div className={'parent'}>
                <div>
                    <h3>USERS LIST:</h3>
                    {!!users && users.map(user => <RenderUser user={user} key={user.id}/>)}
                    <button>Create User</button>
                </div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
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