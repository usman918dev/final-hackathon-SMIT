import React from 'react'
import './RemoveBtn'
import { useParams } from 'react-router-dom';
// import { removeEvent } from '../../services/events';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removethisEvent } from '../../redux/slices/eventSlice';
export default function RemoveBtn() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { id } = useParams();
    const removeBtnHandler = async () => {
        // await removeEvent(id)
        await dispatch(removethisEvent(id))
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
