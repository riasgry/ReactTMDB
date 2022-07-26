import axios from 'axios';
import React, { useState } from 'react'
import { WEB_URL } from './source';

function RentButton({id, title, img}) {
    const [price, setPrice] = useState(10000)
    const [rentDays, setRentDays]=useState('1')

    const SubmitOrder = event=>{
        event.preventDefault();
        const dataUpdate = {
            id:Date.now(),
            id_movie:id,
            name:title,
            img:img,
            rent_days:rentDays,
            total_paid:price
        }
        axios.post(WEB_URL+'/orders',dataUpdate)
        .then(res => {
            alert('Check your Cart')
            window.location.reload()
        })
        .catch(err=>{
            console.log('Input Gagal')
        })
    }
    
  return (
    <div className="rent-container">
        <div className='price-part'>
            <select name="days" id="days" onChange={(e)=>{setRentDays(e.target.value);setPrice(price * 0 + 10000 * parseInt(e.target.value))}}>
                <option value="1">1 Day</option>
                <option value="2">2 Day</option>
                <option value="3">3 Day</option>
            </select>
            <p>Price : Rp. {price},-</p>
        </div>
        <div className="button-part">
            <button onClick={SubmitOrder}>Add to Order Book</button>
        </div>
    </div>
  )
}

export default RentButton