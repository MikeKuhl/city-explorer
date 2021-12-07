import axios from "axios";
import React, { Component } from "react";
import { Form } from "react-bootstrap";
export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      locationObject: {},
      error: false,
      lat: "",
      lon: "",
    };
  }
  fetchData = async () => {
    try {
      let result = await axios.get(
        `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.query}&format=json`
      );
      console.log(result);
      this.setState({ locationObject: result.data[0] });
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
        {this.state.locationObject.display_name ? (
          <p>
            {this.state.locationObject.display_name},
            {this.state.locationObject.lat},{this.state.locationObject.lon}{" "}
          </p>
        ) : (
          <p>Search for a city to explore</p>
        )}
        {this.state.error && <p>There was an error with your request</p>}
      </div>
    );
  }
}
