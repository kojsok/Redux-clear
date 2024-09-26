import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../store/counterSlice'
import profileReducer from '../store/profileSlice'
import tasksReducer from "../store/tasksSlice";


export const store = configureStore({
    reducer: {
      profile: profileReducer,
      counter: counterReducer,
      tasks: tasksReducer,
    },
  });
  
  // Типы для Redux
  export type RootState = ReturnType<typeof store.getState>;
  export type AppDispatch = typeof store.dispatch;