import axios from 'axios'
import React from 'react'
import { WEB_URL } from './source'

function OrderInfo({id,id_movie,img,name,rent_days,total_paid}) {
    console.log(id)
    const DeleteOrder=()=>{
        axios.delete(WEB_URL+'/orders/'+id)
        .then(res => {
            alert('Hapus Sukses')
            window.location.reload()
        })
        .catch(err=>{
            console.log('Hapus Gagal')
        })
    }
  return (
            <div className="order-data">
                <img src={'https://image.tmdb.org/t/p/w200/'+img} alt="" />
                <div className="order-data-detail">
                    <p>Judul</p>
                    <h3>{name}</h3>
                    <p>Rent for {rent_days} Day(s)</p>
                </div>
                <div className="price-order">
                    <p>price</p>
                    <strong>{total_paid}</strong>
                </div>
                <div className='img-trash' onClick={DeleteOrder}>
                <img src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png" alt=''/>
                </div>

            </div>
        
  
  )
}

export default OrderInfo