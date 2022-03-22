import React, {useEffect, useState} from 'react'
import Axios from 'axios'
import Row from '../../UI/Row/Row'
import './homepage.css'
import {useDispatch, useSelector} from 'react-redux'
import ReactPaginate from 'react-paginate'
import {logout} from '../../../Utils/features/token'
import {saveCoins} from '../../../Utils/features/coin'
import {useNavigate} from 'react-router-dom'

const Homepage = () => {

    const [data, SetData] = useState([])
    const [pageNumber, SetPageNumber] = useState(0)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    // const data = useSelector((state) => state.coin.value)
    // const token = useSelector((state) => state.token.value)
    // console.log(token);
    // useEffect(() => {
    //     if(token === ''){
    //         navigate('/error')
    //     }
    // })
    useEffect(() =>{

        const request = async () => {
              const {data} = await Axios.get('https://api2.binance.com/api/v3/ticker/24hr')
              SetData(data)
          } 
          request()

    },[])


    const ChangePage = ({selected}) => {
        SetPageNumber(selected)
    }

    const Logout = () => {
        dispatch(logout())
        dispatch(saveCoins([]))
        navigate('/')
    }

    const coinsPerPage = 9;
    const pageCount = Math.ceil(data.length / coinsPerPage)
    const pagesVisited = pageNumber * coinsPerPage
    const displayCoins = data.slice(pagesVisited, pagesVisited + coinsPerPage).map((p, index) => {
        return (
            <Row symbol={
                    p.symbol
                }
                priceChangePercent={
                    p.priceChangePercent
                }
                highPrice
                ={p.highPrice}
                lowPrice={
                    p.lowPrice
                }
                askPrice={
                    p.askPrice
                }
                key={index}></Row>
        )
    })


    // console.log(pageIndex);
    return (
        <div>
            <div id='homepage'>
                <h1 className='title'>
                    Coins
                </h1>
                <button id='logout'  onClick={Logout}>LogOut</button>
                <div> 
                    <div className='grid container grid_5 titles '>
                        <h2>
                            name
                            <hr />
                        </h2>
                        <h2>
                            changePrice24h
                            <hr />
                        </h2>
                        <h2>highPrice
                        <hr />
                        </h2>
                        <h2>lowPrice
                        <hr />
                        </h2>
                        <h2>askPrice
                        <hr />
                        </h2>
                    </div>
                    {displayCoins}
                </div>
                <div className='footer'>
                    <ReactPaginate previousLabel={"Previous"}
                        nextLabel={"Next"}
                        pageCount={pageCount}
                        onPageChange={ChangePage}
                        containerClassName={"paginationButtuns"}
                        previousLinkClassName={"previouButton"}
                        nextLinkClassName={"nextButton"}
                        disabledClassName={"paginationDisabled"}
                        activeClassName={"paginationActive"}></ReactPaginate>

                </div>

            </div>
        </div>
    )
}

export default Homepage

      
