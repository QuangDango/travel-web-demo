import React from 'react'
import './Maincontent.css'

const BtnControls = ({ moveSlide, arrow }) => {
    return (
        <>
            <div onClick={moveSlide} className={`control-btn-${arrow} height-center-position`}>
                <button className='control-btn'>
                    <i className={`control-btn-icon fa-solid fa-chevron-${arrow}`}></i>
                </button>
            </div>
        </>
    )
}
export default BtnControls