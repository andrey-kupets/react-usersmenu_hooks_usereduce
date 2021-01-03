export default function EditUserWindow() {
    return (
        <div>
            <h3>USER EDITION MENU:</h3>
            <div>
                <label>Name:</label>
                <input type="text"/>
            </div>
            <div>
                <label>UserName:</label>
                <input type="text"/>
            </div>
            <div>
                <label>Email:</label>
                <input type="text"/>
            </div>
            <div>
                <label>Phone:</label>
                <input type="text"/>
            </div>
            <div>
                <label>Website:</label>
                <input type="text"/>
            </div>
            <div>
                <button>Save</button>
                <button>Cancel</button>
            </div>
        </div>
    )
}