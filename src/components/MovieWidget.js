import React, { Component } from "react";
import { Card } from "react-bootstrap";

export default class MovieWidget extends Component {
  render() {
    return (
      <Card
        style={{ width: "18rem", border: "dark", body: true }}
        className='movieData'
      >
        <Card.Title>{this.props.movie[this.props.i].title}</Card.Title>
        <Card.Img
          varient='top'
          alt='171x180'
          height='300'
          width='300'
          src={`https://image.tmdb.org/t/p/original${
            this.props.movie[this.props.i].poster
          }`}
        />
        <Card.Body>
          <Card.Text>{this.props.movie[this.props.i].overview}</Card.Text>
        </Card.Body>
        <br />
      </Card>
    );
  }
}
