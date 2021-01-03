export const initialState = null;

export const apiReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USERS': {
            return action.payload;
        }
        default: {
            return this.state;
        }
    }
}