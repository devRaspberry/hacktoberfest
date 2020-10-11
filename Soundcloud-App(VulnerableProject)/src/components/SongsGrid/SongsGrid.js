import React from 'react';

import SongGrid from '../Song/SongGrid';

import { SongsGridStyle } from '../../styles/SongsGridStyle';

const SongsGrid = (props) => {
	const song = props.songs.map((song) => (
		<SongGrid
			searchTerms={props.searchTerms}
			renderImageSong={() => props.renderImageSong(song)}
			key={song.id}
			song={song}
		/>
	));
	return <SongsGridStyle>{song}</SongsGridStyle>;
};
export default SongsGrid;
