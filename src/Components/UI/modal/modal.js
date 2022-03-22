import React from 'react';
import './modal.css'
export default function Modal({closeModalHandler,symbol,priceChangePercent,openPrice,highPrice,lowPrice,askPrice,weightedAvgPrice,bidQty,bidPrice}) {

    const closeModal = () =>{
        closeModalHandler()
    }

  return (
    <div id='modal_container'>
        <div className='modal'>
            <div className='grid grid_3_2_1'>
                <h1 className=''>{symbol}</h1>
                <div className='flex end'>
                    <button onClick={closeModal} className="btn btn_close">CLick</button>
                </div>
            </div>
            <div className='grid grid_3 container'>
                <div>
                    <h3>priceChangePercent</h3>
                    <h3>{priceChangePercent}</h3>        
                </div>
                <div>
                    <h3>openPrice</h3>
                    <h3>{openPrice}</h3>        
                </div>
                <div>
                    <h3>highPrice</h3>
                    <h3>{highPrice}</h3>        
                </div>
                <div>
                    <h3>lowPrice</h3>
                    <h3>{lowPrice}</h3>        
                </div>
                //created and executed automation tests using 
                //Supporting and enhancing automated testing
                <div>
                    <h3>askPrice</h3>
                    <h3>{askPrice}</h3>        
                </div>
                <div>
                    <h3>weightedAvgPrice</h3>
                    <h3>{weightedAvgPrice}</h3>        
                </div>
                <div>
                    <h3>bidQty</h3>
                    <h3>{bidQty}</h3>        
                </div>
                <div>
                    <h3>bidPrice</h3>
                    <h3>{bidPrice}</h3>        
                </div>
                <div>
                    <h3>bidPrice</h3>
                    <h3>{bidPrice}</h3>        
                </div>
               
            </div>
        </div>
    </div>
  )
}

/*
 I am a dedicated, self-motivated team player and a lover of technology. I am a full-stack developer with experience in MongoDB, Express, React with hooks, Redux and NodeJS 
 I
 */