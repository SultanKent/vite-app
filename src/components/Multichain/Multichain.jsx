import React from 'react'
import './Multichain.scss'
import Frame1 from '../../assets/Frame1.png'
import Frame2 from '../../assets/Frame2.png'
import Frame3 from '../../assets/Frame3.png'

const Multichain = () => {
  return (
    <div className="Multichain">
        <div className="Multichain_main">
            <h1>Multichain <br/>of Madness</h1>
            <p>All networks at the palm of your hand , right there within single ecosystem.</p>
            <div className="Multichain_contents">
            <div className="Multichain_content1">
                <div className='Frame_back first'>
                <img src={Frame1} alt="Frame1" />
                </div>
                <p>USD Coin</p>
            </div>
            <div className="Multichain_content2">
                <div className="Frame_content1">
                <div className='Frame_back second'>
                <img src={Frame2} alt="Frame2" />
                </div>
                <p>Ethereum</p>
                </div>
                <div className="Frame_content1">
                <div className='Frame_back third'>
                <img src={Frame3} alt="Frame3" />
                </div>
                <p>Solana</p>
                </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Multichain