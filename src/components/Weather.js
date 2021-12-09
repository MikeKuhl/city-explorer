import React, { Component } from "react";
import { Card, Row } from "react-bootstrap";
export default class Weather extends Component {
  render() {
    return (
      <Row xs={2} md={3} className='g-4'>
        {this.props.weather.map((day, i) => (
          <Card className='weatherData'>
            <Card.Body>
              Date: {this.props.weather[i].date}
              <br />
              Weather Report: {this.props.weather[i].description}
            </Card.Body>
          </Card>
        ))}
      </Row>
    );
  }
}
