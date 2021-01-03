export default function ProvideFullUserInfo(props) {
    const {fullUserInfo, showEditUserWindow, deleteUser} = props;
    const {id, name, username, email, phone, website} = fullUserInfo;
    return (
        <div>
            <h3><b>FULL USERINFO:</b></h3>
            <div><span><u>#Id/Name:</u></span> {id} - {name}</div>
            <div><span><u>UserName:</u></span> {username}</div>
            <div><span><u>Email:</u></span> {email}</div>
            <div><span><u>Phone:</u></span> {phone}</div>
            <div><span><u>Website:</u></span> {website}</div>
            <div>
                <button onClick={showEditUserWindow}>Edit User</button>
                <button onClick={() => deleteUser(id)}>Delete User</button>
            </div>
        </div>
    )
}