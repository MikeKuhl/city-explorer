import React, { Component } from "react";
import { Card, Stack } from "react-bootstrap";

export default class WeatherDay extends Component {
  render() {
    return (
      <Stack>
        <Card className='weatherData'>
          <Card.Body>
            Date: {this.props.weather[this.props.i].date}
            <br />
            Weather Report: {this.props.weather[this.props.i].description}
          </Card.Body>
        </Card>
      </Stack>
    );
  }
}
