import React, { Component } from 'react';
import Tile from './components/tiles/tile'
import characters from './tiles';
import './app.css';

class App extends Component {
  state = {
    characters,
  };

  clickedTile = id => {
    let charactersPreClick = this.state.characters;
    let clickedFriend = charactersPreClick.find((o, i) => {
      return (o.id === id) ? charactersPreClick[i].clicked = true : console.log("couldn't find it");
    });
    console.log(clickedFriend);
    this.setState({ characters });
  };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Clicky Game</h2>
          <hr />
          <div className="tileHolder">
            {this.state.characters.map(character => (
              <Tile
                clickedTile={this.clickedTile}
                id={character.id}
                key={character.id}
                name={character.name}
                image={character.image}
                clicked={character.clicked}
              />
            ))}
            {console.log(this.state.characters)}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
