import React from 'react';

import { SongListStyle } from '../../styles/SongListStyle';

const Song = (props) => {
	const { title } = props.song;

	return <SongListStyle onClick={props.renderImageSong}>{title}</SongListStyle>;
};
export default Song;
