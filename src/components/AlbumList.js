import React from 'react';
import { Text, ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends React.Component {
	constructor() {
		super()
		this.state = {
			albums: []
		}
	}
	componentWillMount = () => {
		axios.get('http://rallycoding.herokuapp.com/api/music_albums')
			.then((response) => {
				this.setState ({
					albums: response.data
				})
			})
			.catch((error) => {
				console.log(error)
			});
	}
	renderAlbums = () => {
		return this.state.albums.map(album => 
			<AlbumDetail key={album.title} album={album} />
		);
	}
	render() {
		console.log(this.state.albums);
		return (
			<ScrollView>
				{this.renderAlbums()}
			</ScrollView>
		);
	}
}

export default AlbumList;