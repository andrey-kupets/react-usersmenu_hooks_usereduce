export default function RenderUser(props) {
    const {user: {id, name}, user, details} = props;
    return (
        <div>
            {id} - {name}
            <button onClick={() => details(user)}>details...</button>
        </div>
    )
}
