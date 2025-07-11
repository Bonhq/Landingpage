import axios from "axios";
import url from "../constant/url";
import reduxKeys from "../constant/keys";
import store from "../store";

export const getBlogs = () => {
    const { blogData } = store.getState();
    return async (dispatch) => {
        dispatch({ type: reduxKeys.BLOG_LOADING_STATUS, payload: blogData?.blogs?.length == 0 ? true : false });
        try {
            const { data } = await axios.get(url.getBlogs);
            dispatch({ type: reduxKeys.BLOG_DATA, payload: data?.blogs ?? [] });
          } catch (error) {
            dispatch({ type: reduxKeys.BLOG_DATA, payload: [] });
        }
    }
}