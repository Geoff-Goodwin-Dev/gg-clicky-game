import React from "react";
import "./tile.css";

const Tile = props => (
  <div className="tile" onClick={() => props.clickedTile(props.id)}>
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
      {props.name} <br />
      {(props.clicked) ? "Clicked" : "Not Clicked"}
    </div>
  </div>
);

export default Tile;