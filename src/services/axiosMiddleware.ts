import { APP_CONFIG } from '@/utils/constants'
import { Service } from 'axios-middleware'
import axios from 'axios'
import { getAccessToken } from '@/utils/auth'

const service = new Service(axios)
const baseUrl = APP_CONFIG.ENTRY_POINTS.BASE_URL


service.register({
    onRequest(config: any) {
        console.log('onRequest', config);
        if (config.url.includes('/authentication')) {
            if (config.method === 'delete') {
                const token = getAccessToken();
                if (!!token) {
                    config.headers['Authorization'] = 'Bearer ' + token;
                }
            }
        } else {
            const token = getAccessToken();
            if (!!token) {
                config.headers['Authorization'] = 'Bearer ' + token;
            }
        }
        return config;
    },
    onRequestError(error: any) {
        // console.log('onRequestError', error);
    },
    onSync(promise: any) {
        // console.log('onSync');
        return promise;
    },
    onResponse(response: any) {
        // console.log('onResponse');
        return response;
    },
    onResponseError(error: any) {
        // console.log('onResponseError',error);
    }
});

export default axios.create({
    baseUrl
});