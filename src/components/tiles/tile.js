import React from "react";
import "./tile.css";

const Tile = props => (
  <div className="tile">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
      {props.name}
    </div>
  </div>
);

export default Tile;