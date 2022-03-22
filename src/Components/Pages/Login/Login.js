import React, {useState} from 'react'
import './Login.css'
import { onlyLetters } from '../../../Utils/Validation/Validation'
import { useNavigate } from 'react-router-dom'
import { coinsRequest } from '../../../Utils/Axios/Axios'
import { useDispatch, useSelector } from 'react-redux'
import { saveCoins } from '../../../Utils/features/coin'
import { login } from '../../../Utils/features/token'
import Spinner from '../../UI/Spinner/Spinner'

export default function Login() {


    const dispatch = useDispatch();

    const [symbol, SetSymbol] = useState('')
    const [message, SetMessage] = useState('')
    const [load,Setload] = useState(false)
    const navigate = useNavigate()

  

    // {symbol:'LTCBTC'}        

    const coinHandler = async () => {

        Setload(true)
        const valid = onlyLetters(symbol)
        if (!valid) {
            Setload(false)
            SetMessage('Cant find coin or the input is wrong ')
        }
        else {
            const { data } = await coinsRequest.post('/data',{ symbol })
            if (typeof data === 'object') {
                Setload(false)
                dispatch(saveCoins(data))
                dispatch(login('Access'))
                navigate('/homepage')
            }else{
                Setload(false)
                SetMessage('Cant find coin or the input is wrong ')
            }
        }
    }

    return (
        
        <div id='login_page'>
            <div className='forum'>

                <h1>Login page</h1>

                <h2 className='sub_title'>Access Key</h2>
                
                     {load === true? <Spinner></Spinner>:message}
                    <div id='footer'>
                    <input type="text" onChange={(e) => { SetSymbol(e.target.value) }} />
                    <button className='primary_btn' onClick={coinHandler}>Login</button>
                    </div>
               
            </div>
        </div>
    )
}
