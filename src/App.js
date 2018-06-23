import React, { Component } from 'react';
import Tile from './components/tiles/tile'
import characters from './tiles';
import './app.css';

class App extends Component {
  state = {
    characters,
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
                // removeFriend={this.removeFriend}
                id={character.id}
                key={character.id}
                name={character.name}
                image={character.image}
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
