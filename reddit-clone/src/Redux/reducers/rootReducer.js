

import authReducer from '../reducers/authReducer';
const { combineReducers } = require("redux");

const rootReducer = combineReducers({
    auth:authReducer,
})

export default rootReducer;