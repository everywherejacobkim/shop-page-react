import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import categoryImg from '../../images/main-category.jpg';
import { Link } from 'react-router-dom';

function ProductGrids() {
  return (
    <Container className="main-category">
      <p className="main-category-title">상품 카테고리</p>
      <Row>
        <Col>
          <Card style={{ width: '18rem', margin: '0 auto' }}>
            <Card.Img variant="top" src={categoryImg} />
            <Card.Body>
              <Card.Title>
                <b>참기름•들기름</b>
              </Card.Title>
              <Card.Text>Oils</Card.Text>
              <Link to="/dogFood">
                <Button variant="success">
                  <b>둘러보기</b>
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem', margin: '0 auto' }}>
            <Card.Img variant="top" src={categoryImg} />
            <Card.Body>
              <Card.Title>
                <b>계절 특산품</b>
              </Card.Title>
              <Card.Text>Seasonal Products</Card.Text>
              <Link to="/dogTreat">
                <Button variant="success">
                  <b>둘러보기</b>
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card style={{ width: '18rem', margin: '0 auto' }}>
            <Card.Img variant="top" src={categoryImg} />
            <Card.Body>
              <Card.Title>
                <b>기타 상품</b>
              </Card.Title>
              <Card.Text>Other Products</Card.Text>
              <Link to="/dogSupplies">
                <Button variant="success">
                  <b>둘러보기</b>
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductGrids;
