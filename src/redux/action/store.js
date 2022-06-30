import { createStore , applyMiddleware} from 'redux'
import { rootreducs } from '../reducer';
import thunk from 'redux-thunk'


export const ConfigStore = () => {
    let store = createStore(rootreducs, applyMiddleware(thunk))
    return store; 
} 