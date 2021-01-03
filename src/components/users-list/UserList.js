import './UserList.css';
import Loading from "../../service/loading/Loading";
import { useReducer, useEffect } from 'react';
import { withRouter } from "react-router-dom";
import actFetchApi from "../../service/fetch-api/ActFetchApi";
import RenderUser from "../user/User";
import { apiReducer, initialStateUsers } from "../../reducers/ApiReducer";
import ProvideFullUserInfo from "../full-userinfo/FullUserInfo";
import { detailInfoReducer, initialStateDetailInfo } from "../../reducers/DetailInfoReducer";

function ActUserList(props) {
    const [users, dispatchUsers] = useReducer(apiReducer, initialStateUsers);
    const [fullUserInfo, dispatchDetailInfo] = useReducer(detailInfoReducer, initialStateDetailInfo);

    useEffect(() => {
        const {match: {url}} = props;
        actFetchApi(url).then(json => dispatchUsers({type: 'SET_USERS', payload: json}))
    }, [])

    const clickForDetails = (info) => {
        dispatchDetailInfo({type: 'SET_DETAIL_INFO', payload: info})
    };

    if (users) {
        return (
            <div className={'parent'}>
                <div>
                    <h3>USERS LIST:</h3>
                    {!!users && users.map(user => <RenderUser user={user} key={user.id} details={clickForDetails}/>)}
                    <button>Create User</button>
                </div>
                {!!fullUserInfo && <ProvideFullUserInfo fullUserInfo={fullUserInfo}/>}
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