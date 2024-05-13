import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getallMovies } from "../services/api";
import {  Col, Container, Row } from "react-bootstrap";


function MovieDetails() {

    const { id } = useParams();
    const [movie, setMovie] = useState(null);
  
  
    
    useEffect(() => {
      const fetchMovie = async (eventId) => {
        const movieResult = await getallMovies(eventId);
        setMovie(movieResult.data);
  
        
   
      };
  
      
      fetchMovie(id);
    }, []);
  
   
  
    if (!movie){
  
      return <h1 className="text-center"> Movie does not exist !!! </h1>
    }
  return (
    <>
    <Container style={{ marginTop: "30px" }}>
    <Row>
        <Col md={4}>
          <img
            src={`../../public/images/${movie?.img}`}
            style={{ height: "200px", width: "200px" }}
            alt=""
          />
        </Col>
        <Col md={8} className=" text-center ">
          <h3>Description</h3>
          <p>{movie?.description}</p>
          <p>Genre: {movie?.genre}</p>
          <p>Year: {movie?.year}</p>
        </Col>
      </Row>
  </Container>
    
    
    </>
  )
}

export default MovieDetails