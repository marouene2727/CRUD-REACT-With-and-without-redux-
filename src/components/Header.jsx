import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand>MovieDB</Navbar.Brand>
                <Nav className="me-auto">
                    <NavLink to="/movies"  style={({ isActive }) => ({
                  textDecoration: isActive ? "underline" : "none ",
                })}>
                        Movies
                    </NavLink>

                    <p></p>
                    <NavLink to="/moviesRedux"  style={({ isActive }) => ({
                  textDecoration: isActive ? "underline" : "none ",
                })}>
                        Movies
                    </NavLink>
                </Nav>
            </Container>
        </Navbar>
    );
}