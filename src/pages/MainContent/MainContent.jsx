import React from 'react'
import './MainContent.css'
import tick from '../../assets/tick.svg'
import success from '../../assets/success.svg'

const MainContent = () => {
  return (
    <div className='main'>
      <div className="congrats">
        <div className="congrats-top">
          <div className="tick">
            <img src={tick} />
          </div>
          <div className='complete-outer'>
            <div className="complete">
              ✔ 100% Complete
            </div>
          </div>
        </div>
        <div className="congrats-middle">
          <div>
            <h2>Congratulations!</h2>
            <p>You have completed the basic setup, however we also offer many other features that can be added on to your account if needed. Click below to check out our Add-On marketplace.</p>
          </div>
          <div>
            <img src={success} />
          </div>
        </div>
        <div className="congrats-end">
          <button id='add-btn'>Add-On Marketplace</button>
          <button id='setup-btn'>Complete setup</button>
        </div>
      </div>
    </div>
  )
}

export default MainContent