export const initialStateEdition = '';

export const editReducer = (state = initialStateEdition, action) => {
    switch (action.type) {
        case 'EDITION_MENU_IS_VISIBLE': {
            return action.payload;
        }
        default: {
            return  state;
        }
    }
}