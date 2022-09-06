import axiosMidleware from '../axiosMiddleware';
import { APP_CONFIG } from '@/utils/constants';
const resource = APP_CONFIG.ENTRY_POINTS.BASE_URL + APP_CONFIG.ENTRY_POINTS.auth.login;
export default {
    async post(payload: any) {
        console.log(payload);
        const response = await axiosMidleware.post(`${resource}`, {}, {
            auth: {
                username: payload.username,
                password: payload.password
            }
        });
        return response;
    },
    async delete() {
        const response = await axiosMidleware.delete(`${resource}`);
        return response;
    }

}