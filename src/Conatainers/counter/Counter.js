import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { DEData, IcData } from '../../redux/action/Counter.action';

function Counter(props) {
    const dispatch = useDispatch()
    const counter = useSelector(state => state.counter)
    const handleincriment = () => {
        dispatch(IcData())
    }
    const handleDecrimemt = () => {
        dispatch(DEData())
    } 
    return (
        <div>
            <button onClick={()=>handleincriment()}>+</button>
            <p>{counter.counter}</p>
            <button onClick={()=>handleDecrimemt()}>-</button>
        </div>
    );
}

export default Counter;