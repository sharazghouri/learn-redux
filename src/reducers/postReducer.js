import {FETCH_POSTS} from "../actoins/type";


const initialState = {
    items: [],
    item: {}
};

export default function (state = initialState, action) {

    switch (action.type) {
        case FETCH_POSTS:

            return {
                ...state,
                items: action.payload
            }
        default:
            return state;
    }

}