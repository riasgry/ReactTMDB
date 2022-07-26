import React from 'react'

function CommentInfo({name, comment}) {
  return (
    <div>
        <fieldset>
            <legend>from : <span style={{fontSize:'18px'}}>{name}</span></legend>
            <p>said : {comment}</p>
        </fieldset>
      
    </div>
  )
}

export default CommentInfo