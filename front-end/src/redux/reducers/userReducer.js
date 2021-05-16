import { SIGNIN, SIGNUP, LOGOUT } from '../constants/constants';


const userReducer = (state = { loginDetails : null }, action) => {
    switch (action.type) {        
        case SIGNIN:
            localStorage.setItem('profile', JSON.stringify({ ...action?.data }));
            return { ...state, loginDetails: action?.data };

        case SIGNUP:
            
            return state;
        
        case LOGOUT:
            localStorage.clear();
            return { ...state, loginDetails: null };

        default:
            return state;
    }
}

export default userReducer;