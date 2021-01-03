export const apiReducer = (state, action) => {
    switch (action.type) {
        case 'SET_USERS': return action.payload;
        default: return this.state;
    }
};