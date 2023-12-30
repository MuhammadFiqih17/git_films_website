import {Card, Container, Row, Col, Image} from 'react-bootstrap';
import horor1 from '../assets/horror/horor1.png';
import horor2 from '../assets/horror/horor2.png';
import horor3 from '../assets/horror/horor3.png';
import horor4 from '../assets/horror/horor4.png';

const horor = () => {
    return (
        <Container id="horor"><br />
            <h1 className='title text-white'>HORROR MOVIES</h1>
            <Row>
                <Col md={4} className="movwrap">
                <Card className="bg-dark text-white text-center movimg mt-5">
                    <Image src={horor1} className="images" />
                    <div className="bg-dark">
                        <div className="p-2 m-1 text-white">
                        <Card.Title>ALENA</Card.Title>
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
                    <Image src={horor2} className="images" />
                    <div className="bg-dark">
                        <div className="p-2 m-1 text-white">
                        <Card.Title>ANAK TITIPAN SETAN</Card.Title>
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
                <Col md={4} className="movwrap">
                <Card className="bg-dark text-white text-center movimg mt-5">
                    <Image src={horor4} className="images" />
                    <div className="bg-dark">
                        <div className="p-2 m-1 text-white">
                        <Card.Title>BAYI AJAIB</Card.Title>
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

export default horor