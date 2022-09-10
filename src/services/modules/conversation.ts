import axiosClient from '../axiosClient';
import { APP_CONFIG } from '@/utils/constants';
const resource = APP_CONFIG.ENTRY_POINTS.BASE_URL + APP_CONFIG.ENTRY_POINTS.conversation.index;
const logout = APP_CONFIG.ENTRY_POINTS.BASE_URL + APP_CONFIG.ENTRY_POINTS.auth.logout;
export default {
    async getAll(payload: any) {
        console.log(`${resource}/${payload.userID}`);
        const response = await axiosClient.get(`${resource}/${payload.userID}`);
        console.log(response);
        return response;
    },

}