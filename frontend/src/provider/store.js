import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { TaskApi } from './redux/queries/Task'

export const store = configureStore({
  reducer: {
    [TaskApi.reducerPath]: TaskApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(TaskApi.middleware),
})
setupListeners(store.dispatch)