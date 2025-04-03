import { setupServer } from 'msw/node'
import { handlers } from '@/libs/msw/handlers'

export const server = setupServer?.(...handlers)
