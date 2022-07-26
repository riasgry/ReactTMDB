import React from 'react';
import useFetch from './useFetch';
import { useParams } from 'react-router-dom'
import { WEB_URL } from './source';
import CommentInfo from './CommentInfo';

function CommentList() {
    const {id_movie}=useParams();
    let {data,loading, error}=useFetch(WEB_URL+'/comment');
    if(loading) return <h1>Loading...</h1>
    if(error) console.log(error);
    const filterComment= data?.filter(e => e.id_movie === id_movie);
  return (
    <div>
       {filterComment?.map((e)=>(
            <CommentInfo key={e.id} {...e} />
       )
       
       )}
    </div>
  )
}

export default CommentList