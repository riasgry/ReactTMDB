import React from 'react'
import useFetch from './useFetch'
import { WEB_URL } from './source'
import OrderInfo from './OrderInfo'

function OrderMovie() {
    const {data,loading,error} = useFetch(WEB_URL+'/orders')
    if(loading) return <h1>Loading...</h1>
    if(error) console.log(error);

  return (
    <div className='order-container'>
        <div className='order-section'>
            <h1>Your Order</h1>
          {data?.map((e)=>
            <OrderInfo key={e.id} {...e} />
          )}
          <div className="total-order">
              <p>Total</p>
              <strong>{data?.reduce((a,b)=>a=a+b.total_paid,0)}</strong>
        </div>
        </div>
         
        
    </div>
    
  )
}

export default OrderMovie