import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import MovieWidget from "./MovieWidget";
export default class MovieData extends Component {
  render() {
    return (
      <Container fluid>
        {/* <MovieWidget i={0} movie={this.props.movie} /> */}
        <Row xs='auto' className='g-4'>
          {this.props.movie.map((day, i) => (
            <Col>
              <MovieWidget i={i} movie={this.props.movie} />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}
