export const initialStateUsers = null;

export const apiReducer = (state = initialStateUsers, action) => {
    switch (action.type) {
        case 'SET_USERS': {
            return action.payload;
        }
        default: {
            return this.state;
        }
    }
}