import  { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {  addMovieReduxx } from '../../redux/slices/MoviesSlice';
import { Button, Container, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addMovie } from '../../services/api';

function AddMovieRedux() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [idCounter, setIdCounter] = useState("1");

    


     const  [movieItem , setMovieItem] = useState({
      id: idCounter, // Set the initial ID to the current value of the counter
        title:"",
        year:"",
        img:"",
        genre:"",
        description:"",
    })


    const onValueChange =(e)=>{

        setMovieItem({...movieItem , [e.target.name] : e.target.value})
   
    }


    const onFile =(e)=>{

        setMovieItem({...movieItem , [e.target.name]:e.target.files[0].name}) //permet de récupérer le nom de l'image 
    }


    const AddMoviehandle = async()=>{
      

      let  {id,title, year, img, genre, description}  = movieItem  // destructurer le projet selon  

      const nextId = String(parseInt(idCounter, 10) + 1); // Convert current ID to number, increment, and convert back to string
        id = nextId;
        setIdCounter(nextId); // increment id

        dispatch(addMovieReduxx({id:id, title : title, year: year, img : img, genre : genre, description : description}))  

    }
  return (
    <>

<Container style={{ marginTop: "30px" }}>
      <h2>Add a new Movie to your Movie List</h2>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control 

          onChange={(e)=>onValueChange(e)}
            name="title"
            value={movieItem.title}
            type="text"
            placeholder="Enter a Name"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Year</Form.Label>
          <Form.Control 

          onChange={(e)=>onValueChange(e)}
            name="year"
            value={movieItem.year}
            type="text"
            placeholder="Enter a Year"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Image</Form.Label>
          <Form.Control
            type="file"
            name="img"

            onChange={(e)=>onFile(e)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Genre</Form.Label>
          <Form.Control 

          onChange={(e)=>onValueChange(e)}
            name="genre"
            value={movieItem.genre}
            type="text"
            placeholder="Enter a genre"
          />
        </Form.Group>



        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
                    onChange={(e)=>onValueChange(e)}
                    value={movieItem.description}

            as="textarea"
            rows={3}
            placeholder="Enter description "
            name="description"
          />
        </Form.Group>
        



        <Button variant="primary" onClick={AddMoviehandle}>
          Add a Movie
        </Button>
        <Button  variant="secondary" onClick={() => navigate("/moviesRedux")}>
          Cancel
        </Button>
      </Form>
    </Container>
    
    </>
  )
}

export default AddMovieRedux