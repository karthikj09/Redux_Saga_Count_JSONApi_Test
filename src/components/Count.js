import React from 'react';
import './Count.css'
import { useDispatch } from 'react-redux';
import { decrement, increment } from '../redux/count/action';
const Count = () => {
    const dispatch = useDispatch();
    return(
        <div className='container'>
            <div className='btnContainer'>
                <button onClick={() => dispatch(increment())}>Increment</button>
                <button onClick={() => dispatch(decrement())}>Decrement</button>
            </div>
        </div>
    )
}


export default Count;