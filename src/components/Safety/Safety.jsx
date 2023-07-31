import React from 'react'
import './Safety.scss'
import Safety_img1 from '../../assets/Safety1.png'
import Safety_img2 from '../../assets/Safety2.png'
import Safety_img3 from '../../assets/Safety3.png'

const Safety = () => {
  const Safety_ways = [
    {id: 1, img: Safety_img1, title: 'Secured and Decentralized',
    description: 'Experience full spectrum of blockchain features with our non-custodial wallet.'},
    {id: 2, img: Safety_img2, title: 'We got you covered',
    description: 'Both Mastercard and Visa cards are supported to give you what you need.'},
    {id: 3, img: Safety_img3, title: 'Optimize your cashflow',
    description: 'Use our wallet to pay your bills, split bills, transfer and more. All from one place.'},
  ]
  return (
    <div className="Safety">
        <div className="Safety_contents">
            {Safety_ways.map((item) => (
                <div key={item.id} className={`Safety_content ${item.id === 3 ? "Safety_content3" : ""}`}>
                    <img src={item.img} alt="item.img" />
                    <p>{item.title}</p>
                    <p>{item.description}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Safety