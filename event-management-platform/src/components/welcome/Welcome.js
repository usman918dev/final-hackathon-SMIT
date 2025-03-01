import React from 'react'
import "./welcome.css";
export default function Welcome() {
    return (
        <div>
            <div className='WelComeContainer'>
                <div class="typewriter">
                    <h1 className='welcome-Heading'>Welcome to the<br />Event Management System</h1>
                </div>
                <p >Here you can create, view, update and delete events<br/>Also you can write review or check others review<br/>Click on the Events tab to get started
                </p>
                <button className='getStart-btn'>Get Started</button>
            </div>
        </div>
    )
}
