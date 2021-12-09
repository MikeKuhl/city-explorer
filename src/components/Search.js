import axios from "axios";
import React, { Component } from "react";
import { Alert, Button, Card, Container, Form, Navbar } from "react-bootstrap";
import Map from "./Map";
import MapData from "./MapData";
import MovieData from "./MovieData";
import Weather from "./Weather";
export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      locationObject: {},
      error: false,
      lat: "",
      lon: "",
      map: "",
      errorMessage: [],
      weather: [],
      movie: [],
    };
  }

  fetchData = async () => {
    try {
      let result = await axios.get(
        `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.query}&format=json`
      );
      this.setState(
        {
          locationObject: result.data[0],
          lat: result.data[0].lat,
          lon: result.data[0].lon,
          error: false,
        },
        this.fetchWeather
      );
      this.fetchMovie();
    } catch (error) {
      console.log(error);
      this.setState({ error: true, errorMessage: error.message });
    }
  };

  fetchWeather = async () => {
    let url = `${process.env.REACT_APP_SERVER_URL}weather?lat=${this.state.locationObject.lat}&lon=${this.state.locationObject.lon}`;
    try {
      let weatherResult = await axios.get(url);

      this.setState({
        weather: weatherResult.data,
        error: false,
      });
    } catch (error) {
      console.log(error);
      this.setState({ error: true, errorMessage: error.message, weather: [] });
    }
  };
  fetchMovie = async () => {
    let cityName = this.state.locationObject.display_name
      .split(",")[0]
      .toLowerCase();
    let url = `${process.env.REACT_APP_SERVER_URL}movies?&query=${cityName}`;

    let movie = await axios.get(url);
    this.setState({ movie: movie.data });
    console.log("hello");
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ query: event.target.city.value }, this.fetchData);
  };

  render() {
    return (
      <div>
        <Navbar bg='dark' variant='dark'>
          <Container>
            <Navbar.Brand href='#home'></Navbar.Brand>
          </Container>
        </Navbar>
        <Form onSubmit={this.handleSubmit}>
          <input
            type='text'
            placeholder='Enter City name'
            name='city'
            className='input'
          />
          <Button type='submit' className='button'>
            Explore!
          </Button>
        </Form>
        <Card style={{ width: "70rem" }} className='card'>
          <Map locationObject={this.state.locationObject} />
          <Card.Body>
            {this.state.locationObject.display_name ? (
              <p>
                <Card.Title>
                  {this.state.locationObject.display_name}
                </Card.Title>

                <MapData locationObject={this.state.locationObject} />
                <Weather weather={this.state.weather} />
                <MovieData movie={this.state.movie} />
              </p>
            ) : (
              <p>Search for a city to explore</p>
            )}
            {this.state.error && (
              <Alert
                varient='danger'
                className='error'
                onClose={() => this.setState({ error: false })}
                dismissible
              >
                There was an error with your request. Please try again.{" "}
                {this.state.errorMessage}
              </Alert>
            )}
          </Card.Body>
        </Card>
      </div>
    );
  }
}
