'use client'

import type {
  ToastActionElement,
  ToastRootProps,
} from '@/components/Toast/Toast'
import { ReactNode, useSyncExternalStore } from 'react'

type ToasterToast = Omit<ToastRootProps, 'title'> & {
  id: string
  title?: ReactNode
  description?: ReactNode
  action?: ToastActionElement
  duration?: number
}

type Toast = Omit<ToasterToast, 'id'>

enum ActionType {
  ADD_TOAST = 'ADD_TOAST',
  UPDATE_TOAST = 'UPDATE_TOAST',
  DISMISS_TOAST = 'DISMISS_TOAST',
  REMOVE_TOAST = 'REMOVE_TOAST',
}

type Action =
  | {
      type: ActionType.ADD_TOAST
      toast: ToasterToast
    }
  | {
      type: ActionType.UPDATE_TOAST
      toast: Partial<ToasterToast>
    }
  | {
      type: ActionType.DISMISS_TOAST
      toastId?: ToasterToast['id']
    }
  | {
      type: ActionType.REMOVE_TOAST
      toastId?: ToasterToast['id']
    }

type State = {
  toasts: ToasterToast[]
}

const TOAST_LIMIT = 1
const TOAST_REMOVE_DELAY = 1000000
const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>()
const listeners: Array<(state: State) => void> = []
let memoryState: State = { toasts: [] }
let count = 0

function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER

  return count.toString()
}

const addToRemoveQueue = ({
  id,
  duration,
}: {
  id: ToasterToast['id']
  duration?: ToasterToast['duration']
}) => {
  if (toastTimeouts.has(id)) {
    return
  }

  const timeout = setTimeout(() => {
    toastTimeouts.delete(id)
    dispatch({
      type: ActionType.REMOVE_TOAST,
      toastId: id,
    })
  }, duration ?? TOAST_REMOVE_DELAY)

  toastTimeouts.set(id, timeout)
}

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'ADD_TOAST':
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      }

    case 'UPDATE_TOAST':
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === action.toast.id ? { ...t, ...action.toast } : t,
        ),
      }

    case 'DISMISS_TOAST': {
      const { toastId } = action

      // ! Side effects ! - This could be extracted into a dismissToast() action,
      // but I'll keep it here for simplicity
      if (toastId) {
        addToRemoveQueue({ id: toastId })
      } else {
        state.toasts.forEach((toast) => {
          addToRemoveQueue({ id: toast.id })
        })
      }

      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === toastId || toastId === undefined
            ? {
                ...t,
                open: false,
              }
            : t,
        ),
      }
    }

    case 'REMOVE_TOAST':
      if (action.toastId === undefined) {
        return {
          ...state,
          toasts: [],
        }
      }

      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      }

    default:
      return { toasts: [] }
  }
}

function dispatch(action: Action) {
  memoryState = reducer(memoryState, action)
  listeners.forEach((listener) => {
    listener(memoryState)
  })
}

function toast({ ...props }: Toast) {
  const id = genId()

  const update = (props: ToasterToast) =>
    dispatch({
      type: ActionType.UPDATE_TOAST,
      toast: { ...props, id },
    })
  const dismiss = () =>
    dispatch({ type: ActionType.DISMISS_TOAST, toastId: id })

  dispatch({
    type: ActionType.ADD_TOAST,
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss()
      },
    },
  })

  return {
    id,
    dismiss,
    update,
  }
}

function subscribe(listener: (state: State) => void) {
  listeners.push(listener)

  return () => {
    const index = listeners.indexOf(listener)

    if (index > -1) {
      listeners.splice(index, 1)
    }
  }
}

export function useToast() {
  const state = useSyncExternalStore(
    subscribe,
    () => memoryState,
    () => memoryState,
  )

  return {
    ...state,
    toast,
    dismiss: (toastId?: string) =>
      dispatch({ type: ActionType.DISMISS_TOAST, toastId }),
  }
}
