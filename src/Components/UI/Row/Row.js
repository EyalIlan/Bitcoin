import React, { useState } from 'react';
import Modal from '../../UI/modal/modal'
import './Row.css'
export default function Row({symbol,priceChangePercent,highPrice,lowPrice,askPrice}) {


      const [showModal,SetShowModal] = useState(false)

      const showModalHandler = () =>{
         SetShowModal(true)
      }

      const closeModalHandler = () =>{
        SetShowModal(false)
      }


     let changePrice;
    if(priceChangePercent > 0){
        changePrice  =  (<h3> <span className='postive'>{priceChangePercent}%</span></h3>)
    }else{
        changePrice  =  (<h3> <span className='negitive'>{priceChangePercent}%</span></h3>)
    }
    let modal; 
    if(showModal){
      console.log('in');
      modal = (<Modal closeModalHandler = {closeModalHandler}></Modal>)
    }else{
      modal = ''   
    }
    
     

    return (
    <div>
      {/* <Modal  symbol = {symbol} priceChangePercent = {priceChangePercent} highPrice= {highPrice} lowPrice={lowPrice} askPrice={askPrice}></Modal> */}
        {/* {modal} */}
    <div className='grid container grid_5 coins_container'>
        <div onClick={showModalHandler}>
            <h3>{symbol}</h3>
        </div>
        <div>
            {changePrice}
        </div>
        <div>
        <h3>{highPrice}</h3>

        </div>
        
        <div>
          <h3>
            {lowPrice}    
           </h3>
        </div>

        <div>
           <h3>
            {askPrice}   
          </h3>

        </div>
    </div>
    </div>
  )
}
