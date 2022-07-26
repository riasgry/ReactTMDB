import React from 'react'
import useFetch from './useFetch';
import MovieInfo from './MovieInfo';
import NextItem from './nextItem';
import {useParams} from 'react-router-dom'
import {BASE_URL, API_KEY, language,currentUrl} from './source';

function SearchMovie() {
  let {query}= useParams();
  let {page}=useParams();
  console.log(BASE_URL+currentUrl+'?api_key='+API_KEY+'&language='+language+'&query='+query+'&page='+page);
    const {data,loading,error}= useFetch(BASE_URL+currentUrl+'?api_key='+API_KEY+'&language='+language+'&query='+query+'&page='+page);
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


export default SearchMovie