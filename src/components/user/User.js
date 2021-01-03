export default function RenderUser(props) {
    const {user} = props;
    return (
        <div>
            {user.id} - {user.name}
            <button>details...</button>
        </div>
    )
}
