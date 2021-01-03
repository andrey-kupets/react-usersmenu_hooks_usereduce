export const editReducer = (state, action) => {
    switch (action.type) {
        case 'EDITION_MENU_IS_VISIBLE': return action.payload;
        default: return state;
    }
};