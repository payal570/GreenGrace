import React from 'react'
import './fashion.css'
import luizclas from '../../assets/luizclas.jpg'
import StockSnap from '../../assets/StockSnap.jpg'
import soldiervip from '../../assets/soldiervip.jpg'

function Fashion() {
   return (
      <div className='fashion'>
         <div className="fashion1">
            <img src={luizclas} alt="" />
         </div>
         <div className="fashion1">
            <img src={StockSnap} alt="" />
         </div>
         <div className="fashion1">
            <img src={soldiervip} alt="" />
         </div>
      </div>
   )
}

export default Fashion