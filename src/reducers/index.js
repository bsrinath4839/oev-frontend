import { combineReducers } from "redux"

import adminReducer from "./admin.reducer"
import voterReducer from "./voter.reducer"


const reducers = combineReducers({
    admin: adminReducer,
    voter: voterReducer,
})

export default reducers;