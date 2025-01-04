import { configureStore } from '@reduxjs/toolkit'
import addReducer  from './reducers/MainReducer'
export default configureStore({
  reducer: {
     data:addReducer
  }
})