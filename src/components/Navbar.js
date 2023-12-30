import {Navbar, Container, Nav} from "react-bootstrap"

const NavBar = () => {
    return (
        <div>
            <Navbar variant="dark">
            <Container>
                <Navbar.Brand href="/">GitFilms</Navbar.Brand>
                <Nav>
                <Nav.Link href="#trend">TRENDING</Nav.Link>
                <Nav.Link href="#horor">HORROR</Nav.Link>
                <Nav.Link href="#act">ACTION</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        </div>
    )
}

export default NavBar