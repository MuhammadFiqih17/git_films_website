
import { Container, Row, Col, Button,} from 'react-bootstrap';

const intro = () => {
    return (
        <div className="intro">
          <Container className="text-white d-flex justify-content-center align-items-center">
            <Row>
              <Col>
              <div className="title">NONTON GRATIS</div>
              <div className="title">TANPA KHAWATIR DOMPET TIPIS</div>
              <div className="intbutt mt-4 text-center">
                <Button variant="dark">Lihat semua list</Button>
              </div>
              </Col>
            </Row>
          </Container>
        </div>
    )
}

export default intro