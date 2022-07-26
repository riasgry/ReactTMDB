import React, { useState } from 'react'
import { useNavigate } from 'react-router';

function Navbar() {
  let Navigate = useNavigate()
  const [query, setQuery] = useState('');
  // const [orderCount,setOrderCount] = useState();


  console.log(query)
  return (
    <div>
      <div className='navbar'>
        <div className="nav-title">
           <h1>LUHURMovie</h1>
        </div>
        <ul>
          <li><a href='/'>Home</a></li>
          <li><a href='/upcoming'>Upcoming</a></li>
          <li><a href='/populer'>Popular</a></li>
        </ul>
      </div>
      <div className="search-bar">
          <input type="text" name="search" id="search" onChange={(e)=>setQuery(e.target.value)} required />
          <a href={'http://localhost:3000/search/'+query+'/1'}><button>Search</button></a>
      </div>
      <div className="cart-logo">
        <img onClick={()=>{Navigate("/checkout")}} src="https://img.icons8.com/carbon-copy/100/000000/shopping-cart.png" alt=''/>
      </div>
    </div>
    
  )
}

export default Navbar
