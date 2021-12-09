import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";

export default class MapData extends Component {
  render() {
    return (
      <div>
        <ListGroup className='list-group-flush'>
          <ListGroupItem className='ListGroup'>
            Latitude {this.props.locationObject.lat}
          </ListGroupItem>{" "}
          <ListGroupItem className='ListGroup'>
            {" "}
            Longitude
            {this.props.locationObject.lon}
          </ListGroupItem>
        </ListGroup>
      </div>
    );
  }
}
