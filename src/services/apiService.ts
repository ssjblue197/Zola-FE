import Authentication from './modules/auth'
import Conversation from './modules/conversation'

const repositories: any = {
    auth: Authentication,
    conversation: Conversation
}

export const apiService = {
    get: (name: string) => repositories[name]
}