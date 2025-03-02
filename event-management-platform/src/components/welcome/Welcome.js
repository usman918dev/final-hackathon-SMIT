import React from 'react'
import "./welcome.css";
import { useNavigate } from 'react-router-dom';

export default function Welcome() {
    const navigate = useNavigate();
    return (
        <div>
            <div className='WelComeContainer'>
                <div class="typewriter">
                    <p className='welcome-Heading'>Welcome to the </p>
                    <p className='welcome-Heading'>Event Management System</p>
                </div>
                <p >Here you can create, view, update and delete events<br/>Also you can write review or check others review<br/>Click on the Events tab to get started
                </p>
                <button className='getStart-btn' onClick={()=> navigate("/login")}>Get Started</button>
            </div>
        </div>
    )
}
