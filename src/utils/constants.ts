export const APP_CONFIG = {
    LOCAL_STORAGE: {
        ACCESS_TOKEN: 'App_AccessToken',
        ACCESS_TOKEN_EXPIRES: 'App_AccessToken_Expires',
        REFRESH_TOKEN: 'App_RefreshToken',
        REFRESH_TOKEN_EXPIRES: 'App_RefreshToken_Expires',
        CURRENT_USER: 'App-current-user'
    },
    ENTRY_POINTS: {
        BASE_URL: '/api',
        auth: {
            login: '/login',
            logout: '/logout'
        },
    }
}