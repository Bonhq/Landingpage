const API = import.meta.env.VITE_API_URL;

export const Cred = import.meta.env.VITE_SHARE_CRED;

export const shareUrl = {
    insta: import.meta.env.VITE_SHARE_INSTA,
    twitter: import.meta.env.VITE_SHARE_TWITTER,
    linkedin: import.meta.env.VITE_SHARE_LINKEDIN,
  };

export default {
    earlyAccess: `${API}/users/early-access`,
    getBlogs: `${API}/blogs`,
}