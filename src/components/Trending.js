import {Card, Container, Row, Col, Image} from 'react-bootstrap';
import act1 from '../assets/action/act1.png';
import act3 from '../assets/action/act3.png';
import horor3 from '../assets/horror/horor3.png';

const trending = () => {
    return (
        <Container id="trend"><br />
            <h1 className='title text-white'>TRENDING MOVIES</h1>
            <Row>
                <Col md={4} className="movwrap">
                <Card className="bg-dark text-white text-center movimg mt-5">
                    <Image src={act1} className="images" />
                    <div className="bg-dark">
                        <div className="p-2 m-1 text-white">
                        <Card.Title>AQUAMAN</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in
                    </Card.Text>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                        </div>
                    </div>
                </Card>
                </Col>
                <Col md={4} className="movwrap">
                <Card className="bg-dark text-white text-center movimg mt-5">
                    <Image src={act3} className="images" />
                    <div className="bg-dark">
                        <div className="p-2 m-1 text-white">
                        <Card.Title>JOHN WICK IV</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in
                    </Card.Text>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                        </div>
                    </div>
                </Card>
                </Col>
                <Col md={4} className="movwrap">
                <Card className="bg-dark text-white text-center movimg mt-5 mb-5">
                    <Image src={horor3} className="images" />
                    <div className="bg-dark">
                        <div className="p-2 m-1 text-white">
                        <Card.Title>HIDAYAH</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in
                    </Card.Text>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                        </div>
                    </div>
                </Card>
                </Col>
            </Row>
        </Container>
        
    )
}

export default trending