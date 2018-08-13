import counterReducer from './modules/counter'
import { combineReducers } from 'redux'
import { updatedName } from './modules/name';
import { recordCount } from './modules/record_count';


export default combineReducers({
    counter: counterReducer,
    name: updatedName,
    name: recordCount
})

