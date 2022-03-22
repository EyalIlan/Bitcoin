import React from 'react'
import './404.css'
import {useNavigate} from 'react-router-dom'



export default function Page404() {
    
    const navigate = useNavigate()
    
    const ReturnHome = () =>{
        navigate('/')
    }


    return (
        <div id='Page404'>
            <button id='returnBtn' onClick={ReturnHome}>Retun to login page</button>
        </div>
    )
}
