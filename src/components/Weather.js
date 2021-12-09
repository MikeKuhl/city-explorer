import React, { Component } from "react";
import { Card, Container, Row, Stack } from "react-bootstrap";
export default class Weather extends Component {
  render() {
    return (
      <Container fluid>
        <Row xs='auto' className='g-4'>
          {this.props.weather.map((day, i) => (
            <Stack>
              <Card className='weatherData'>
                <Card.Body>
                  Date: {this.props.weather[i].date}
                  <br />
                  Weather Report: {this.props.weather[i].description}
                </Card.Body>
              </Card>
            </Stack>
          ))}
        </Row>
      </Container>
    );
  }
}
