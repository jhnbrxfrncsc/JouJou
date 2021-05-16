import { FETCH, CREATE, REMOVE } from '../constants/constants';


const blogReducer = (state = [], action) => {
    switch (action.type) {
        case FETCH:
            return action.payload;

        case CREATE:
            console.log([...state, action.payload]);
            return [...state, action.payload];

        case REMOVE:
            const newData = state.filter(blogs => blogs._id !== action.payload);
            return newData;

        default:
            return state;
    }
}

export default blogReducer;