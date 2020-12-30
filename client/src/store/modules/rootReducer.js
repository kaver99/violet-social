import { combineReducers } from 'redux';
import user from './account/userReducer';


const rootReducer = combineReducers({
    user,
});

export default rootReducer;