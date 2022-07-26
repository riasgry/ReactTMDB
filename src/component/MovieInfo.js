import React from 'react';
import {useNavigate} from 'react-router-dom'
import useFetch from './useFetch';
import {API_KEY, language} from './source';
import RentButton from './RentButton';

function MovieInfo({original_title, release_date, overview, poster_path, id, genre_ids}){
    let Navigate = useNavigate();
    const {data,loading, error}= useFetch('https://api.themoviedb.org/3/genre/movie/list?api_key='+API_KEY+'&language='+language);
    if(loading) return <h1>Loading...</h1>
    if(error) console.log(error);
    const Genre=genre_ids.map(id => data?.genres.find(genre => genre.id === id))
    return(
        <div className="moviecard" >
            <div className="title-movie" onClick={()=>{Navigate("/Detail/"+id)}}>
                <h2>{original_title}</h2>
            </div>
            <div className="content-movie" onClick={()=>{Navigate("/Detail/"+id)}}>
                <div className="img-side">
                    <img src={'https://image.tmdb.org/t/p/w200/'+poster_path} alt="" />
                </div>
                <div className="detail">
                   <p>{overview}</p>
                </div>
            </div>
            <div className="genre">
                    {Genre.map((i,x)=><button key={x}>{i?.name}</button>)}
            </div>
            <RentButton id={id} title={original_title} img={poster_path}/>
        </div>
    )
}

export default MovieInfo;