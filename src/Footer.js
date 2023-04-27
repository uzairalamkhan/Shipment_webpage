import React from 'react'

function Footer() {
  return (
    <div className='footer'>
      <div className='foot-left'>
      <div>Email-TeleportShipments@xyz.com</div>
      <div>Contact No- 8899775566</div>
      <div>Address- 11/2-350/A,Opp.McDonalds,Himayath Nagar,Hyderabad</div>
      <div>Pin Code-500008</div>
      </div>
      <div>
        <div className='foot-right'>
            Services Offered in citties<ul>
            <li>India</li>
            <li>UAE</li>
            <li>China</li>
            <li>South Africa</li>
            <li>Sri Lanka</li>
            </ul>
        </div>
      </div>
      <div>
        <img className='image2'  src='https://thumbs.dreamstime.com/b/d-isometric-flat-vector-conceptual-illustration-international-cargo-delivery-logistics-transportation-194871550.jpg' />
      </div>
    </div>
  )
}

export default Footer
