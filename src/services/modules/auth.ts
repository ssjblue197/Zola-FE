import axiosClient from '../axiosClient';
import { APP_CONFIG } from '@/utils/constants';
const resource = APP_CONFIG.ENTRY_POINTS.BASE_URL + APP_CONFIG.ENTRY_POINTS.auth.login;
const logout = APP_CONFIG.ENTRY_POINTS.BASE_URL + APP_CONFIG.ENTRY_POINTS.auth.logout;
const register = APP_CONFIG.ENTRY_POINTS.BASE_URL + APP_CONFIG.ENTRY_POINTS.auth.register;
export default {
    async login(payload: any) {
        const response = await axiosClient.post(`${resource}`, payload);
        return response;
    },
    async logout(payload: any) {
        const response = await axiosClient.post(`${logout}`, payload);
        return response;
    },
    async register(payload: any) {
        const response = await axiosClient.post(`${register}`, payload);
        return response;
    }

}