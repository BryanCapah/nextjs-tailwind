import { configureStore } from '@reduxjs/toolkit'
import expandNavBarReducer from './reducers/template-reducers/index'

export default configureStore({
    reducer: {
        expandNavBar: expandNavBarReducer
    },
})
