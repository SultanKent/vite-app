import React from 'react'
import './Support.scss'
import Wallet_img1 from '../../assets/Wallet1.png'
import Wallet_img2 from '../../assets/Wallet2.png'
import Wallet_img3 from '../../assets/Wallet3.png'
import Wallet_img4 from '../../assets/Wallet4.png'
import Wallet_img5 from '../../assets/Wallet5.png'
import Wallet_img6 from '../../assets/Wallet6.png'

const Support = () => {
    const wallets = [Wallet_img1, Wallet_img2, Wallet_img3, Wallet_img4, Wallet_img5, Wallet_img6]
    return (
    <div className="Support">
        <div className="Support_main">
            <div className="Supported_wallets">
            <div className="top-wallets">
        {wallets.slice(0, 3).map((wallet, index) => (
          <img key={index} src={wallet} alt={`Wallet Image ${index + 1}`} className="Wallet_img"/>
        ))}
            </div>
            <div className="bottom-wallets">
        {wallets.slice(3).map((wallet, index) => (
          <img key={index} src={wallet} alt={`Wallet Image ${index + 4}`} className="Wallet_img"/>
        ))}
            </div>
            </div>
            <div className="Supported_text">
              <h1>Supported Wallets</h1>
              <p>Explore growing list of supported wallets. More coming soon.</p>
            </div>
        </div>
    </div>
  )
}

export default Support