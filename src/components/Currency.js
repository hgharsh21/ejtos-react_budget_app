import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext'; 
const Currency = () => {
    const { dispatch } = useContext(AppContext);
    const handleEvent = (val) => {
                dispatch({
                    type: 'CHG_CURRENCY',
                    payload: val,
                });
        };
    return (
        <div>
            <div className="input-group-prepend">
                <label className="input-group-text" htmlFor="inputGroupSelect01">Currency
            <select className="custom-select" id="inputGroupSelect01" onChange={(event) => handleEvent(event.target.value)}>
                <option value="₤" name="Pound">₤ Pound</option>
                <option value="$" name="Dollar">$ Dollar</option>
                <option value="€" name="Euro">€ Euro</option>
                <option value="₹" name="Ruppee">₹ Ruppee</option>
            </select>
            </label>
            </div>
        </div>
    );
};
export default Currency;