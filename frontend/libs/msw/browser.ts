import { setupWorker } from 'msw/browser'
import { handlers } from '@/libs/msw/handlers'

export const worker = setupWorker?.(...handlers)
