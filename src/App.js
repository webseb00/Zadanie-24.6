import React, { Component } from 'react';
import './App.css';
import PlayersList from './components/PlayersList/PlayersList';
import AddPlayer from './components/AddPlayer/AddPlayer';

class App extends Component {
	constructor() {
		super();

		this.state = {
			players: [
				{
				name: 'Kunegunda',
				score: 5,
				},
				{
				name: 'Antoś',
				score: 0,
				}
			]
		}
	}
	  
	onScoreUpdate = (playerIndex, scoreChange) => {
		this.setState({
			players: this.state.players.map((player, index) => {
			if (index === playerIndex) {
				return Object.assign({}, player, { score: player.score + scoreChange });
			}
			return player;
			})
		})
	}

	onPlayerAdd = (playerName) => {
		const newPlayer = {
			name: playerName,
			score: 0,
		}
		this.setState({
			players: [...this.state.players, newPlayer]
		})
	}

	onPlayerRemove = (i) => {
		const { players } = this.state;
		const remainedPlayers = players.filter(player => player.name !== players[i].name);
		let sort = remainedPlayers.sort(this.compare);
		this.setState({
			players: sort
		})
	}

	render() {
		const { onPlayerAdd, onScoreUpdate, onPlayerRemove } = this;
		return (
			<div className="App">
				<AddPlayer onPlayerAdd={onPlayerAdd} />
				<PlayersList players={this.state.players} onScoreUpdate={onScoreUpdate} onPlayerRemove={onPlayerRemove} />
			</div>
		);
	}
}

export default App;