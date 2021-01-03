export const detailInfoReducer = (state, action) => {
    switch (action.type) {
        case 'SET_DETAIL_INFO':return action.payload;
        default: return state;
    }
};