export const APP_CONFIG = {
    LOCAL_STORAGE: {
        ACCESS_TOKEN: 'App_AccessToken',
        ACCESS_TOKEN_EXPIRES: 'App_AccessToken_Expires',
        REFRESH_TOKEN: 'App_RefreshToken',
        REFRESH_TOKEN_EXPIRES: 'App_RefreshToken_Expires',
        CURRENT_USER: 'App-current-user'
    },
    ENTRY_POINTS: {
        BASE_URL: 'http://localhost:3000/api',
        auth: {
            login: '/auth/login',
            logout: '/auth/logout',
            register: '/auth/register',
            google: '/auth/google',
            facebook: '/auth/facebook'
        },
        conversation: {
            index: '/conversations'
        },
        message: {
            index: '/messages'
        }
    }
}