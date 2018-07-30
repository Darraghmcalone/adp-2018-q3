import counterReducer from './modules/counter'
import { combineReducers } from 'redux'
import { updateName } from './modules/name';


export default combineReducers({
    counter: counterReducer,
    name: updateName
})

