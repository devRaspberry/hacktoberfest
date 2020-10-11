import React from 'react';

import SongList from '../Song/SongList';

import { SongsListStyle } from '../../styles/SongsListStyle';

const SongsList = (props) => {
	const song = props.songs.map((song) => (
		<SongList
			layout={props.layout}
			searchTerms={props.searchTerms}
			renderImageSong={() => props.renderImageSong(song)}
			key={song.id}
			song={song}
		/>
	));
	return <SongsListStyle>{song}</SongsListStyle>;
};
export default SongsList;
