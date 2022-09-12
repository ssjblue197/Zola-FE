import axiosClient from '../axiosClient';
import { APP_CONFIG } from '@/utils/constants';
const resource = APP_CONFIG.ENTRY_POINTS.BASE_URL + APP_CONFIG.ENTRY_POINTS.message.index;

export default {
    async getAll(payload: any) {
        const response = await axiosClient.get(`${resource}/${payload.conversationID}/${payload.userID}`);
        return response;
    },
    async sendMessage(payload: any) {
        const response = await axiosClient.post(`${resource}/send`, payload);

        return response;
    }

}