import reduxKeys from "../../constant/keys";

// reducers.js
const initialState = {
    blogs: [],
    request: true
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case reduxKeys.BLOG_LOADING_STATUS:
            return { ...state, request: action.payload };
        case reduxKeys.BLOG_DATA:
            return { ...state, blogs: action.payload, request: false };
        default:
            return state;
    }
};

export default reducer;