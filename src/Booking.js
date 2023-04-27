import React from 'react'
import { Form } from 'semantic-ui-react'

function Booking() {
  return (
    <div className='booking'>
      <div>
        <p className='headbook'>Start your Booking</p>
        <form>
            <div className='bookform1'>
            <div>Name: <input/></div>
           <div> Ph.No: <input/></div>
            </div>
            <div className='bookform2'>
            <div>From:<input placeholder='city'/></div>
            <div>To:<input placeholder='city'/> </div>
            </div>    
        </form>
      </div>
    </div>
  )
}

export default Booking
