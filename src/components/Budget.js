import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { dispatch,budget,remaining,currency } = useContext(AppContext);
    const mx = 20000;
    const mn = budget-remaining
    const submitEvent = (val) => {

        if(val > mx) {
            alert("The value cannot exceed 20000  £");
            return;
        }
        else if(val < mn){
            alert("You cannot reduce the value lower than the spending");
            return;
        }
         else {
                dispatch({
                    type: 'SET_BUDGET',
                    payload: val,
                });
            }
    };
    return (
        <div className='alert alert-secondary'>
            <span>
                Budget:
                {currency}
                <input type="number" onChange={(event) => submitEvent(event.target.value)} step="10" value={budget}></input> 
            </span>
        </div>
    );
};
export default Budget;