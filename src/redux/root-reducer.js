
import {combineReducers} from 'redux'
import userReducer from './user/user.reducer'

const rootReducer = combineReducers({
    enteredList: userReducer,
})
export default rootReducer;