import { createStore , applyMiddleware} from 'redux'
import { rootreducs } from '../reducer';
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import { rootsaga } from '../../saagas/root.saga';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth']
}
 
const persistedReducer = persistReducer(persistConfig, rootreducs)
const sagaMiddleware = createSagaMiddleware()
const middleware =[thunk, sagaMiddleware]
export const ConfigStore = () => {
    let store = createStore(persistedReducer, applyMiddleware(...middleware))
    sagaMiddleware.run(rootsaga)
    return store; 
} 
  const store = ConfigStore();
  export let persistor = persistStore(store)
export default store;