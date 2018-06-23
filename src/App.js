import React, { Component } from 'react';
import Tile from './components/tiles/tile'
import characters from './tiles';
import './app.css';

class App extends Component {
  state = {
    characters,
    score: 0,
    wins: 0,
    losses: 0
  };

  clickedTile = id => {
    let charactersArray = this.state.characters;
    const newScore = this.state.score + 1;
    charactersArray.find((o, i) => {
      if (o.id === id && !o.clicked) {
        charactersArray[i].clicked = true;
        charactersArray = this.shuffleArray(charactersArray);
        this.setState({characters, score: newScore});
        if (newScore === 9) {
          this.handleRoundReset();
          return this.setState({wins: this.state.wins +1});
        }
        return true;
      }
      else if (o.id === id && o.clicked) {
        return this.handleAlreadyClicked(charactersArray[i].name);
      }
      else {
        return false;
      }
    });
  };

  shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;

  };

  handleAlreadyClicked = (name) => {
    console.log(`${name} has already been clicked!`);
    this.handleRoundReset();
    return this.setState({losses: this.state.losses + 1})
  };

  handleRoundReset = () => {
    const charactersArray = this.state.characters;
    for (let character of charactersArray) {
      character.clicked = false
    }
    return this.setState({characters, score: 0});
  };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Clicky Game</h2>
          <h3>Score: {this.state.score}</h3>
          <h3>Wins: {this.state.wins}</h3>
          <h3>Losses: {this.state.losses}</h3>
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
          </div>
        </div>
      </div>
    );
  }
}

export default App;
