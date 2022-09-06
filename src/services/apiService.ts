import Authentication from './modules/auth'

const repositories: any = {
    auth: Authentication
}

export const apiService = {
    get: (name: string) => repositories[name]
}