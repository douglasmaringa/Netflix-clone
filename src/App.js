import React from "react";
import request from './Request'
import Row from './Row'
import Banner from './Banner'
import "./App.css";


function App(){

  
  return (
    <div className="App">
      <h1>Netflix</h1>
      <Banner fetchUrl={request.fetchNetFlixOriginal}/>
     <Row title="NETFLIX ORIGINALS" fetchUrl={request.fetchNetFlixOriginal}/>
     <Row title="Trending" fetchUrl={request.fetchTrending}/>
     <Row title="Top Rated" fetchUrl={request.fetchTopRated}/>
     <Row title="Action Movies" fetchUrl={request.fetchActionMovies}/>
     <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies}/>
     <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies}/>
     <Row title="TRomance Movies" fetchUrl={request.fetchRomanceMovies}/>
     
     </div>
  );
}

export default App;
