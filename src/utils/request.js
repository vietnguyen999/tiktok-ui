import axios from 'axios';

const requast = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
});
export const get = async (path, options = {}) => {
    const response = await requast.get(path, options);
    return response.data;
};
export default requast;
