import React from 'react'
import './RemoveBtn'
import { useParams } from 'react-router-dom';
import { removeEvent } from '../../services/events';
import { useNavigate } from 'react-router-dom';
export default function RemoveBtn() {
    const {id} = useParams();
    const navigate = useNavigate();
    const removeBtnHandler = async () =>{
        await removeEvent(id)
        console.log("hellousman");
        console.log(id);
        navigate('/home')
    }
    return (
        <div>
            <button className='removeBtn' onClick={removeBtnHandler}>X</button>
        </div>
    )
}
