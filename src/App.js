import React from "react"
import Navbar from "./component/Navbar"
import MovieList from "./component/MovieList"
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';
import DetailMovie from "./component/DetailMovie";
import SearchMovie from "./component/SearchMovie";
import OrderMovie from "./component/OrderMovie";

function App() {
    return(
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/now_playing/1" replace/>}/>
          <Route path="/now_playing" element={<Navigate to="/now_playing/1"  />}/>
          <Route path="/now_playing/:page" element={<MovieList />}/>
          <Route path="/upcoming" element={<Navigate to="/upcoming/1" />}/>
          <Route path="/upcoming/:page" element={<MovieList />}/>
          <Route path="/populer" element={<Navigate to="/populer/1" />}/>
          <Route path="/populer/:page" element={<MovieList />}/>
          <Route path="/detail/:id_movie" element={<DetailMovie />}/>
          <Route 
            path="/search/:query/:page" 
            element={<SearchMovie />}/>
          <Route path="/search" element={<Navigate to="/now_playing/1"  />}/>
          <Route path="*" element={<Navigate to="/now_playing/1" />}/>
          <Route path="/checkout" element={<OrderMovie />}/>
        </Routes>
      </BrowserRouter>
      
    )
}


export default App
