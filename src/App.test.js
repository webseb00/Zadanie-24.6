import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import PlayersList from './components/PlayersList/PlayersList';
import AddPlayer from './components/AddPlayer/AddPlayer';

it('renders without crashing', () => {
  	shallow(<App />);
});

it('should update player score', () => {
	const appComponent = shallow(<App />);
	const players = [
		{
		name: 'Kunegunda',
		score: 5,
		},
		{
		name: 'Antoś',
		score: 0,
		}
	];

	appComponent.setState({ players });
	const onScoreUpdate = appComponent.find(PlayersList).prop('onScoreUpdate');
	onScoreUpdate(0, 5);
	const playersAfterUpdate = appComponent.state('players');
	expect(playersAfterUpdate[0].score).toEqual(10);
});

it('should add new player', () => {
	const appComponent = shallow(<App />);
	const players = [];

	appComponent.setState({ players });
	const onPlayerAdd = appComponent.find(AddPlayer).prop('onPlayerAdd');
	onPlayerAdd('Ania');
	const playersAfterUpdate = appComponent.state('players'); 
	expect(playersAfterUpdate[0]).toEqual({name: 'Ania', score: 0});
});

it('should remove player', () => {
	const appComponent = shallow(<App />);
	const players = [
		{
		name: 'Kunegunda',
		score: 5,
		},
		{
		name: 'Antoś',
		score: 0,
		}
	];

	appComponent.setState({ players });
	const onPlayerRemove = appComponent.find(PlayersList).prop('onPlayerRemove');
	onPlayerRemove(0);
	const playersAfterUpdate = appComponent.state('players');
	expect(playersAfterUpdate[0].name).toEqual('Antoś');
});