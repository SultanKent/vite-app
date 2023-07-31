import React from 'react'
import './Feature.scss'
import Offer from '../../assets/Offer.png'
import Key from '../../assets/Key.png'
import Cart2 from '../../assets/Cart2.png'

const Feature = () => {
  return (
    <div className="Feature">
        <div className="Feature_main">
            <div className="Feature_content1">
                <h1>Loaded with features.<br/> Free, forever.</h1>
            </div>
            <div className="Feature_content2">
                <img src={Offer} alt="Offer1" />
                <h1>Free of<br/> all Fees</h1>
                <p>Never worry about hight cost of your transactions. We go it covered.</p>
            </div>
        </div>
        <div className="Feature_main2">
          <img src={Key} alt="Key" className='Key'/>
          <img src={Cart2} alt="Cart" className='Cart'/>
        </div>
    </div>
  )
}

export default Feature