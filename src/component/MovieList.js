import React from 'react'
import useFetch from './useFetch';
import MovieInfo from './MovieInfo';
import NextItem from './nextItem';
import {useParams} from 'react-router-dom'
import {BASE_URL, API_KEY, language,currentUrl} from './source';

function MovieList() {
  // window.location.reload();
  let {page=1}= useParams();
  if(page==null)page=1;
    const {data,loading,error}= useFetch(BASE_URL+currentUrl+'?api_key='+API_KEY+'&language='+language+'&page='+page);
    if(loading) return <h1>Loading...</h1>
    if(error) console.log(error);
      return (
        <div>
          <div className="movielist">
           {
            data?.results.map((datas)=>
              <MovieInfo key={datas.id} {...datas} />
              )
          }
        </div>
        <NextItem />
        </div>
        
         
      )
}

export default MovieList