import { createStore , applyMiddleware} from 'redux'
import { rootreducs } from '../reducer';
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import { rootsaga } from '../../saagas/root.saga';


const sagaMiddleware = createSagaMiddleware()
const middleware =[thunk, sagaMiddleware]
export const ConfigStore = () => {
    let store = createStore(rootreducs, applyMiddleware(...middleware))
    sagaMiddleware.run(rootsaga)
    return store; 
} 