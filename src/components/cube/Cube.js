import React from 'react'
import './style.css'
export default function Cube() {
    return (
        <div className='body'>

            <div class="cube">
                <div class="face front"></div>
                <div class="face back"></div>
                <div class="face right"></div>
                <div class="face left"></div>
                <div class="face top"></div>
                <div class="face bottom"></div>
                <div class="face light"></div>
            </div>
            <div class="txt">3D Glowing Cube</div>
        </div>
    )
}
