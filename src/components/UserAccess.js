import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { changeUser } from '../store/slices/userName.slice';
import { useDispatch } from 'react-redux';

const UserAccess = () => {

    const[userName, setUserName] = useState("");

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const getName = ()=> {
        console.log(userName)
        dispatch(changeUser(userName))
        navigate("/pokedex")
    }

    return (
        <div className='user-access'>
            <div className='image'>
            <img src="https://mediamaster.vandal.net/m/10-2021/2021105724573_1.jpg" alt="" />
            </div>
            <div className='input'>
            <input 
                type="text" 
                placeholder='Escribe tu nombre para comenzar!'
                value={userName} 
                onChange={e => setUserName(e.target.value)
                }/>
            <button onClick={getName}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/601px-Pokebola-pokeball-png-0.png" alt="" /></button>
            </div>
        </div>
    );
};

export default UserAccess;