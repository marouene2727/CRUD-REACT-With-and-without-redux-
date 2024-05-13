import { useState } from 'react';
import { Alert, Button, Card, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { deleteMovie } from '../services/api';
import { useDispatch } from 'react-redux';
import { deleteMovieReduxx } from '../redux/slices/MoviesSlice';

function Movie({movie}) {



  const [rating, setRating] = useState('');
  const [ratings, setRatings] = useState(movie.ratings || []);
  const [showAlert, setShowAlert] = useState(false);

  const dispath = useDispatch();

  const handleRating = (event) => {
    const newRating = event.target.value;
    if (newRating < 1 || newRating > 5) {
      setShowAlert(true);
    } else {
      setRating(newRating);
      setShowAlert(false);
    }
  }

  const addRating = () => {
    setRatings([...ratings, Number(rating)]);
    setRating('');
  }

  const totalRating = ratings.reduce((a, b) => (a + b)/2, 0);


  const handleDelete = async () => {
    try {
      const response = await deleteMovie(movie.id);
      if (response.status === 200) {
        alert('Movie deleted successfully!');
      } else {
        alert('An error occurred while deleting the movie.');
      }
    } catch (error) {
      console.error('An error occurred while deleting the movie.', error);
      alert('An error occurred while deleting the movie.');
    }
  }

  const handleDeleteWithRedux =  () => {
    dispath(deleteMovieReduxx({id : movie.id}))
  }




  return (
    <>
    <Card>
    <Card.Img variant="top" src={`../../public/images/${movie.img}`} />
    <Card.Body>
    <Link to={`/movies/details/${movie.id}`}>
    <Card.Title>{movie.title}</Card.Title>
    </Link>
      <Card.Text>Year : {movie.year}</Card.Text>
      <Card.Text>Genre: {movie.genre} </Card.Text>
      <Card.Text>Description : {movie.description}</Card.Text>


      <Form.Group controlId="rating">
            <Form.Label>Rating</Form.Label>
            <Form.Control type="number" placeholder="Enter a rating between 1 and 5" value={rating} onChange={handleRating} />
            <Button variant="primary" onClick={addRating}>Add</Button>
          </Form.Group>
          {showAlert && <Alert variant="danger">Please enter a rating between 1 and 5</Alert>}
          <Card.Text> {totalRating === 0 ? 'No ratings yet' : 'Total Rating: ' + totalRating}</Card.Text>

          <Button variant='success'><Link to={`/movies/update/${movie.id}`}>Update(NoREDUX)</Link></Button>

          <Button><Link to={`/moviesRedux/updateRedux/${movie.id}`}>Update(Redux)</Link></Button>

          <Button variant="danger" onClick={handleDelete}>DeleteNoRedux</Button>

          <Button variant="danger" onClick={handleDeleteWithRedux}>DeleteRedux</Button>


    </Card.Body>
  </Card>
    
    </>
  )
}

export default Movie