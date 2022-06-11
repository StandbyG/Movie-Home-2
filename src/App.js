import React, {useState, useEffect} from 'react';
import './styles/App.css';
import Row from './Row';
import Requests from './requests';
import Banner from './Banner';
import Nav from './Nav';
function App() {
  return (
    <div className="app">
      <Nav/>
      <Banner/>
      <Row title = "Favoritos" fetchUrl={Requests.fetchTrending}/>
      <Row title = "Mas Valorados" fetchUrl={Requests.fetchTopRated}/>
      <Row title = "Accion" fetchUrl={Requests.fetchActionMovies}/>
      <Row title = "Comedia" fetchUrl={Requests.fetchComedyMovies}/>
      <Row title = "Terror" fetchUrl={Requests.fetchHorrorMovies}/>
      <Row title = "Romance" fetchUrl={Requests.fetchRomanceMovies}/>
      <Row title = "Documentales" fetchUrl={Requests.fetchDocumantaries}/>
      
    </div>
  );
}

export default App;
