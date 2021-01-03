const initialState = null;

const reducerApi = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USERS': {
            return action.payload;
        }
        default: {
            return state;
        }
    }
}
export default reducerApi;