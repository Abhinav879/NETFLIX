import './App.css';
import instance from './instance';
import Row from './components/Row';
import requests from './requests';
import Banner from './components/Banner';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner/>
      <Row title ="NetflixOriginals" fetchUrl = {requests.fetchNetflixOriginals} isLargeRow={true}/>
      <Row title ="Trending" fetchUrl = {requests.fetchTrending}/>
      <Row title ="ActionMovies" fetchUrl = {requests.fetchActionMovies}/>
      <Row title ="ComedyMovies" fetchUrl = {requests.fetchComedyMovies}/>
      <Row title ="HorrorMovies" fetchUrl = {requests.fetchHorrorMovies}/>
      <Row title ="RomanceMovies" fetchUrl = {requests.fetchRomanceMovies}/>
      <Row title ="Documentaries" fetchUrl = {requests.fetchDocumentaries}/>
      <Row title ="TopRated" fetchUrl = {requests.fetchTopRated}/>
    </div>
  );
}

export default App;
