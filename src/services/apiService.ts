import Authentication from './modules/auth'
import Conversation from './modules/conversation'
import Message from './modules/message'

const repositories: any = {
    auth: Authentication,
    conversation: Conversation,
    message: Message
}

export const apiService = {
    get: (name: string) => repositories[name]
}