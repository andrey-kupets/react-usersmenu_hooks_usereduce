export const createReducer = (state, action) => {
    switch (action.type) {
        case 'CREATION_MENU_IS_VISIBLE': return action.payload;
        default: return state;
    }
};