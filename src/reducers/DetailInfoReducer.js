export const initialStateDetailInfo = null;

export const detailInfoReducer = (state = initialStateDetailInfo, action) => {
    switch (action.type) {
        case 'SET_DETAIL_INFO': {
            return action.payload;
        }
        default: {
            return state;
        }
    }
}