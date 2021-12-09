import React, { Component } from "react";
import { Card } from "react-bootstrap";

export default class Map extends Component {
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
    };
  }
  render() {
    return (
      <div>
        <Card style={{ width: "70rem" }} className='card'>
          <Card.Img
            variant='top'
            src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${this.props.locationObject.lat},${this.props.locationObject.lon}&zoom=16&size=1280x720`}
          />
        </Card>
      </div>
    );
  }
}
