import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { editMovie, getallMovies } from '../../services/api';
import { Button, Container, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { updateMovieReduxx } from '../../redux/slices/MoviesSlice';

function EditMovieRedux() {

    const param = useParams()

    const dispatch = useDispatch(); 

    const navigate = useNavigate();
     const  [movieItem , setMovieItem] = useState({
        id:"",
        title:"",
        year:"",
        img:"",
        genre:"",
        description:"",
    })

    const fetchEvent = async () => {
        const movieResult = await getallMovies(param.id);
        setMovieItem(movieResult.data);
  
        
   
      };
  
    useEffect(() => {
      
        
        fetchEvent(param.id);
        
      }, []);


    const onValueChange =(e)=>{

        setMovieItem({...movieItem , [e.target.name] : e.target.value})
   
    }


    const onFile =(e)=>{

        setMovieItem({...movieItem , [e.target.name]:e.target.files[0].name}) //permet de récupérer le nom de l'image 
    }


    const UpdateMovieHandle =async ()=>{

        const  {id,title, year, img, genre, description}  = movieItem  // destructurer le projet selon  

       // console.log("id",{id})

        dispatch(updateMovieReduxx({id:id, title : title, year: year, img : img, genre : genre, description : description}))
        
        const eventResult = await editMovie(param.id , movieItem)
        if(eventResult.status ==200){
            navigate("/movies")
        }
    }

  return (
    <>

    <Container style={{ marginTop: "30px" }}>
          <h2>Update the Movie {movieItem.title} :</h2>
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
            
    
    
    
            <Button variant="primary" onClick={UpdateMovieHandle}>
              Update the Movie
            </Button>
            <Button  variant="secondary" onClick={() => navigate("/movies")}>
              Cancel
            </Button>
          </Form>
        </Container>
        
        </>
  )
}

export default EditMovieRedux