export const userReducer = (state, action) => {
    switch (action.type) {
        case 'INPUT_NAME': return {...state, name: action.payload};
        case 'INPUT_USERNAME': return {...state, username: action.payload};
        case 'INPUT_EMAIL':return {...state, email: action.payload};
        case 'INPUT_PHONE': return {...state, phone: action.payload};
        case 'INPUT_WEBSITE': return {...state, website: action.payload};
        default: return state;
    }
};