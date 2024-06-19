import {combineReducers} from 'redux'
import authReducer from './reducers/authReducer'
import userData from './reducers/userData'


export default combineReducers({
    auth: authReducer,
    userData: userData
})