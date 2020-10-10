import React, { Component } from 'react';
import SC from 'soundcloud';
import axios from 'axios';

import SearchForm from './SearchForm/SearchForm';
import Player from './Player/Player';
import RecentSearches from './RecentSearches/RecentSearches';
import SongsList from './SongsList/SongsList';
import SongsGrid from './SongsGrid/SongsGrid';
import Controls from './Controls/Controls';

import { Container } from '../styles/Container';
import { Col } from '../styles/Col';

const CLIENT_ID = 'ggX0UomnLs0VmW7qZnCzw';
const PAGE_SIZE = 6;

class App extends Component {
	state = {
		songs: [],
		nextSongs: '',
		layout: 'list',
		oEmbed: '',
		selectedSong: '',
		searchTerms: '',
		showoEmbed: false,
		recentSearches: []
	};

	componentDidMount() {
		this.fetchSongs();
		this.addToLocalStorage();
	}

	fetchSongs = (searchTerm) => {
		let newSearchTerms = this.state.searchTerms;
		newSearchTerms = searchTerm;
		this.setState({ searchTerms: newSearchTerms, recentSearches: searchTerm });

		SC.initialize({
			client_id: CLIENT_ID
		});

		SC.get('/tracks', {
			q: searchTerm,
			license: 'cc-by-sa',
			limit: PAGE_SIZE,
			linked_partitioning: 1
		}).then((tracks) => {
			this.setState({ songs: tracks.collection, nextSongs: tracks.next_href });
		});
	};

	renderNewSongs = () => {
		axios
			.get(this.state.nextSongs)
			.then((res) => this.setState({ nextSongs: res.data.next_href, songs: res.data.collection }));
	};

	renderLayout = (layout) => {
		let newlayout = this.state.layout;
		newlayout = layout;
		this.setState({ layout: newlayout });
	};

	renderImageSong = (song) => {
		const songs = !song.artwork_url ? (
			<img
				style={{ width: '300px', height: '300px' }}
				src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png"
				alt="place holder"
			/>
		) : (
			<img
				style={{ width: '300px', height: '300px' }}
				onClick={() => this.playSong(song)}
				src={song.artwork_url}
				alt="img"
			/>
		);
		let copySong = this.state.selectedSong;
		copySong = songs;
		this.setState({ selectedSong: copySong });

		document.querySelector('.player').classList.remove('hide');
		document.querySelector('.oEmbed').classList.add('oEmbed');
	};

	playSong = (song) => {
		if (!song) {
			return;
		}

		const permalink_url = `${song.permalink_url}`;
		SC.oEmbed(permalink_url, { auto_play: true }).then((oEmbed) => {
			this.setState({ oEmbed: oEmbed.html, showoEmbed: true });
		});

		document.querySelector('.player').classList.add('hide');
	};

	addToLocalStorage = (song) => {
		// TODOS: Fix localstorage problem, Array start with null on every refresh
		if (localStorage.getItem('songs') === null) {
			let songs = [ ...this.state.recentSearches, song ];
			this.setState({ recentSearches: songs });
			localStorage.setItem('songs', JSON.stringify(songs));
		} else {
			let songs = JSON.parse(localStorage.getItem('songs'));
			if (songs.length > 5) {
				songs.pop();
			}
			songs.push(song);
			localStorage.setItem('songs', JSON.stringify(songs));
		}
		this.setState({ recentSearches: JSON.parse(localStorage.getItem('songs')) });
	};

	render() {
		return (
			<Container>
				<Col
					style={{ display: 'flex', flexDirection: 'column', justifyContent: 'spacep-between' }}
					className="left-div"
				>
					<SearchForm addToLocalStorage={this.addToLocalStorage} fetchSongs={this.fetchSongs} />
					{this.state.layout === 'grid' ? (
						<SongsGrid
							searchTerms={this.state.searchTerms}
							renderImageSong={this.renderImageSong}
							songs={this.state.songs}
						/>
					) : (
						<SongsList
							searchTerms={this.state.searchTerms}
							renderImageSong={this.renderImageSong}
							songs={this.state.songs}
						/>
					)}
					<Controls
						searchTerm={this.state.searchTerm}
						renderLayout={this.renderLayout}
						renderNewSongs={this.renderNewSongs}
					/>
				</Col>

				<Col style={{ textAlign: 'center' }} className="center-div">
					<Player
						songs={this.state.songs}
						playSong={this.playSong}
						oEmbed={this.state.oEmbed}
						selectedSong={this.state.selectedSong}
						showoEmbed={this.state.showoEmbed}
					/>
				</Col>

				<Col style={{ textAlign: 'center' }} className="right-div">
					<RecentSearches recentSearches={this.state.recentSearches} />
				</Col>
			</Container>
		);
	}
}
export default App;
