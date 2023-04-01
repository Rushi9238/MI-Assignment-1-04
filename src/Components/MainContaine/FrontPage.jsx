import React from 'react'
import '../../CSS_files/FrontPage.css'
const FrontPage = () => {
  return (
   <>
   <div className="frontPage">
   <h2>Welcome! First things first...</h2>
   <p>You can always change them later.</p>
   <div className="name">
    <label>Full Name</label>
    <input type="text" name="" id="" placeholder='Steav Job' />
   </div>
   <div className="name">
    <label>Display Name</label>
    <input type="text" name="" id="" placeholder='Steav' />
   </div>
   </div>
   </>
  )
}

export default FrontPage