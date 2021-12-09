import React, { Component } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
export default class MovieData extends Component {
  render() {
    return (
      <Container fluid>
        <Row xs='auto' className='g-4'>
          {this.props.movie.map((day, i = 5) => (
            <Col>
              <Card
                style={{ width: "18rem", border: "dark", body: true }}
                className='movieData'
              >
                <Card.Title>{this.props.movie[i].title}</Card.Title>
                <Card.Img
                  varient='top'
                  alt='171x180'
                  height='300'
                  width='300'
                  src={`https://image.tmdb.org/t/p/original${this.props.movie[i].poster}`}
                />
                <Card.Body>
                  <Card.Text>{this.props.movie[i].overview}</Card.Text>
                </Card.Body>
                <br />
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}
