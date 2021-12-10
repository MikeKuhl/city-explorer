import axios from "axios";
import React, { Component } from "react";
import { Button, Card, Container, Form, Navbar } from "react-bootstrap";
import CardWidget from "./CardWidget";
import Map from "./Map";
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
      date: "",
      poster: "",
      title: "",
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
          <CardWidget
            locationObject={this.state.locationObject}
            movie={this.state.movie}
            weather={this.state.weather}
          />
        </Card>
      </div>
    );
  }
}
