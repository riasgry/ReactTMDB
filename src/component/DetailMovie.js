import React from 'react'
import {useParams} from 'react-router-dom'
import useFetch from './useFetch';
import {BASE_URL, API_KEY, language} from './source';
import CommentSection from './CommentSection';
import RentButton from './RentButton';

function DetailMovie() {
    let {id_movie} = useParams();
    const {data,loading,error}= useFetch(BASE_URL+'movie/'+id_movie+'?api_key='+API_KEY+'&language='+language);
    if(loading) return <h1>Loading...</h1>
    if(error) console.log(error);
  return (
    <div>
      <div className="container">
        <div className="background-img">
        <img src={'https://image.tmdb.org/t/p/original'+data?.backdrop_path} alt="" />
        </div>
        <div className="detail-card">
        <div className="detail-card-img">
          <img src={'https://image.tmdb.org/t/p/w300/'+data?.poster_path} alt="" />
        </div>
        <div className="detail-card-overview">
            <h2>{data?.title}</h2>
            <RentButton id={data?.id} title={data?.title} img={data?.poster_path} />
          <div className="flex-content">
            <p>{data?.release_date}</p>
            {data?.genres.map((i,x)=><button key={x}>{i?.name}</button>)}<br/>
          </div>
          <div className="flex-section">
            <div className="flex-content-left">
              <p><b>Country</b></p>
                {data?.production_countries.map((datas,x)=><span key={x}>{datas.name}</span>)}
              <p><b>Dub</b></p>
                {data?.spoken_languages.map((datas,x)=><span key={x}>{datas.english_name}, </span>)}
            </div>
            <div className="flex-content-right">
              <p><b>Synopsis</b></p>
                <p>{data?.overview}</p>
            </div>
          </div>
            <p><b>Production</b></p>
            <div className="flex-content">
              {data?.production_companies.map((datas,x)=>
                <div className='detail-company-card' key={x}>
                  <div className="img-company">
                    {datas.logos!==null||undefined?<img src={'https://image.tmdb.org/t/p/w200'+datas.logo_path} alt="" />:""}
                    
                  </div>
                  <p>
                    <span>{datas.name}</span>
                    <span>{datas.origin_country}</span>
                  </p>
                </div>
                
              )}
            </div>
            
          </div>
        </div>
      </div>
      
      <CommentSection />
    </div>
    
        
  )
}


export default DetailMovie
