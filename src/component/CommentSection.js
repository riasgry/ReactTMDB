import axios from 'axios';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import '../comment.css';
import { WEB_URL } from './source';
import CommentList from './CommentList';

function CommentSection() {
    let {id_movie}=useParams()
    const [username, setUsername]=useState('')
    const [comment, setComment]= useState('')

    const SubmitForm =event=>{
        event.preventDefault();

        const dataUpdate = {
            id:Date.now(),
            id_movie:id_movie,
            name:username,
            comment:comment
        }
        console.log({dataUpdate})
        if(username||comment!==''){
            axios.post(WEB_URL+'/comment',dataUpdate)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
        window.location.reload();
        }else{
            alert('Masukkan nama dan komentar anda')
        }
        
    }
    
    
  return (
    <div className='container-comment'>
        <div className="comment-card">
            <div className="comment-form-section">
{/*                 
                <img src="https://img.icons8.com/bubbles/50/000000/user.png" alt='pfp'/> */}
                <div className="comment-form-input">
                    <span>Name: </span><input type="text" name="name" placeholder='input your name' id="name" value={username} onChange={(e)=>setUsername(e.target.value)} required/><br/>
                    <span>Comment: </span><textarea name="comment" placeholder='input your Comment' id="comment" cols="30" rows="3" value={comment} onChange={(e)=>setComment(e.target.value)} required></textarea>
                    <button onClick={SubmitForm}>Post!</button>
                </div>
                
            </div>
            <div className="comment-section">
                <CommentList />
            </div>
        </div>
    </div>
  )
}

export default CommentSection