import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import WeatherDay from "./WeatherDay";

export default class Weather extends Component {
  render() {
    return (
      <Container fluid>
        {/* <WeatherDay weather={this.props.weather} i={1} /> */}
        <Row xs='auto' className='g-4'>
          {this.props.weather.map((day, i) => (
            <WeatherDay weather={this.props.weather} i={i} />
          ))}
        </Row>
      </Container>
    );
  }
}
