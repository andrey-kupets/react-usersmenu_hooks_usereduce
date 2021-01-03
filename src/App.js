import './App.css';
import {Link, Route} from "react-router-dom";
import ActUserList from "./components/users-list/UserList";

function App() {
    return (
        <div>
            <Link to={'/users'}>users</Link>
            <Route path={'/users'} render={() => <ActUserList/>}/>
        </div>
    );
}

export default App;
