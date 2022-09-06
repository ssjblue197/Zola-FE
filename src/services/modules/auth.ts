import axiosClient from '../axiosClient';
import { APP_CONFIG } from '@/utils/constants';
const resource = APP_CONFIG.ENTRY_POINTS.BASE_URL + APP_CONFIG.ENTRY_POINTS.auth.login;
export default {
    async post(payload: any) {
        console.log(payload);
        const response = await axiosClient.post(`${resource}`, payload);
        return response;
    },
    async delete() {
        const response = await axiosClient.delete(`${resource}`);
        return response;
    }

}