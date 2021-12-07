import axios from "axios";
import React, { Component } from "react";
import { Card, Form } from "react-bootstrap";
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
    };
  }
  fetchData = async () => {
    try {
      let result = await axios.get(
        `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.query}&format=json`
      );

      this.setState({
        locationObject: result.data[0],
        lat: result.data[0].lat,
        lon: result.data[0].lon,
      });
    } catch (error) {
      console.log(error);
      this.setState({ error: true });
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ query: event.target.city.value }, this.fetchData);
  };
  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <input type='text' placeholder='City name' name='city' />
          <button type='submit'>Explore!</button>
        </Form>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant='top'
            src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${this.state.locationObject.lat},${this.state.locationObject.lon}&zoom=18`}
          />
          <Card.Body>
            {this.state.locationObject.display_name ? (
              <p>
                <Card.Title>
                  {this.state.locationObject.display_name}
                </Card.Title>
                ,{this.state.locationObject.lat},{this.state.locationObject.lon}{" "}
              </p>
            ) : (
              <p>Search for a city to explore</p>
            )}
            {this.state.error && <p>There was an error with your request</p>}
          </Card.Body>
        </Card>
      </div>
    );
  }
}
