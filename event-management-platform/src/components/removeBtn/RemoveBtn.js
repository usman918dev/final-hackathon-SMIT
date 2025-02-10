import React from 'react'
import './RemoveBtn'
import { useParams } from 'react-router-dom';
import { removeEvent } from '../../services/events';
export default function RemoveBtn() {
    const {id} = useParams();
    const removeBtnHandler = () =>{
        removeEvent(id)
        console.log("hellousman");
        console.log(id);
        
    }
    return (
        <div>
            <button className='removeBtn' onClick={removeBtnHandler}>X</button>
        </div>
    )
}
