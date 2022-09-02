import React from 'react';
import { currentPage,currentSection } from './source';

function NextItem() {
  let a = currentPage;
  let b = currentSection;
  if(isNaN(parseFloat(a))){
    a=1
  }
  if(b===''||b===null)b='now_playing'
  return (
    <div className='page-button'>
      
      <a className={a===1?"disablelink":""} href={'/'+b+'/'+(a-1)}><button disabled={a===1?true:false}>&lt;</button></a>
      <a href={'/'+b+'/'+(a+1)}><button>&gt;</button></a>
    </div>
  )
}

export default NextItem
