import { combineReducers } from "redux"

import adminReducer from "./admin.reducer"
import voterReducer from "./voter.reducer"
import candidateReducer from "./candidate.reducer";


const reducers = combineReducers({
    admin: adminReducer,
    voter: voterReducer,
    candidate : candidateReducer,
})

export default reducers;