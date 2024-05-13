import './App.css'
import Header from './components/Header'
import Movies from './components/Movies'
import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';
import NotFound from './components/NotFound';
import MovieDetails from './components/MovieDetails';
import AddMovieNoRedux from './components/addMovie/AddMovieNoRedux';
import EditMovieNoRedux from './components/editMovie/EditMovieNoRedux';
import AddMovieRedux from './components/addMovie/addMovieRedux';
import MoviesRedux from './components/MoviesRedux';
import { Layout } from './components/Layout';
import Home from './components/Home';
import EditMovieRedux from './components/editMovie/editMovieRedux';


function App() {
  

  return (
    <>

    <Router>
      <div>
    
        <Routes>

        <Route path="/" element={<Layout><Home /></Layout>} />
        
          <Route path="/movies" element={<Layout><Movies /></Layout>}></Route>

          <Route path="/moviesRedux" element={<Layout><MoviesRedux /></Layout>}></Route>

          <Route  path="/moviesRedux/addMovieRedux" element={<Layout><AddMovieRedux/></Layout>}/>

          <Route  path="/movies/addMovie" element={<Layout><AddMovieNoRedux/></Layout>}/>

          <Route  path="/movies/details/:id" element={<Layout><MovieDetails/></Layout>}/>

          <Route  path="/movies/update/:id" element={<Layout><EditMovieNoRedux/></Layout>}/>

          <Route  path="/moviesRedux/updateRedux/:id" element={<Layout><EditMovieRedux/></Layout>}/>

          <Route path="*" element={<NotFound />} /> 

        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App
