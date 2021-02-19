
import React, {useEffect} from 'react'
import ADDRECORD from './addrecord'
import '../App.css'

import {fetchtodo} from '../redux/index'
import { useSelector,useDispatch} from 'react-redux';
const User = (props) => {

    const toallrecord=useSelector(state=>state.record);
    // console.log(`data is ${toallrecord}`);
    // const newrecord = Object.values(toallrecord);
    // console.log(newrecord);
    const dispatch=useDispatch();
    useEffect(() => {
        dispatch(fetchtodo())
    });
    return (
        <>
            <h1 className="text">Home Component</h1>
            {toallrecord.map((product, index) => (
       
       <div className="card-wraper" key={index} >
                 <div className="card" >
                     <img src="https://m.media-amazon.com/images/I/61itOh+Je8L._AC_UY218_.jpg" alt=""/>
                </div>
                  <div className="text-wraper"> 
                  <p >{product.name}</p>

                      <p>$1000.00</p>
                  </div>
                  <div className="button">
                  <button>Add To Card</button>
              </div>
              </div>
      ))} 
<ADDRECORD />
 
        </>
    )
 
}
export default User

 
