import  { useEffect, useState } from 'react'
import Movie from './Movie'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';




const MoviesRedux =() => {
  const [movies,setMovies]=useState([]);
  const [searchTerm,setSearchTerm]= useState("");
  const [inputValue, setInputValue] = useState('');

  const result = useSelector(state => state.moviesRedux);
  console.log("result", result)

  useEffect(() => {
    const fetchMovies = () => {
      setMovies(result);
    };
    fetchMovies();
  }, []);

  const handleSearch = (event) => {
    event.preventDefault();
    setSearchTerm(inputValue);
  }

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }

  const filteredMovies = searchTerm
    ? movies.filter(movie => movie.title.toLowerCase().includes(searchTerm.toLowerCase()))
    : movies;



  return (
    <>

<Container style={{ marginTop: "30px" }}>

  
<Button variant="primary" as={Link} to="/moviesRedux/addMovieRedux">Add Movie</Button>


        <Form onSubmit={handleSearch}>
          <Form.Group controlId="searchForm">
            <Form.Control type="text" placeholder="Search for a movie..." value={inputValue} onChange={handleInputChange} />
            <Button variant="primary" type="submit">Submit</Button>
          </Form.Group>
        </Form>
        <Row>
          {filteredMovies.length > 0 ? (
            filteredMovies.map((m, index) => (
              <Col key={m.id} md={6}>
                <Movie key={index} movie={m} />
              </Col>
            ))
          ) : (
            <p>No result found</p>
          )}
        </Row>
      </Container>
    

    
    </>
  )
}

export default MoviesRedux