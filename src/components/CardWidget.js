import React, { Component } from 'react'
import MapData from "./MapData";
import MovieData from "./MovieData";
import Weather from "./Weather";
import { Alert, Button, Card, Container, Form, Navbar } from "react-bootstrap";
export default class CardWidget extends Component {
  render() {
    return (
 <Card.Body>
            {this.props.locationObject.display_name ? (
              <p>
                <Card.Title>
                  {this.props.locationObject.display_name}
                </Card.Title>

                <MapData locationObject={this.props.locationObject} />
                <Weather weather={this.props.weather} />
                <MovieData movie={this.props.movie} />
              </p>
            ) : (
              <p>Search for a city to explore</p>
            )}
            {this.props.error && (
              <Alert
                varient='danger'
                className='error'
                onClose={() => this.setState({ error: false })}
                dismissible
              >
                There was an error with your request. Please try again.{" "}
                {this.props.errorMessage}
              </Alert>
            )}
          </Card.Body>
    )
  }
}
