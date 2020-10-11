import React from 'react';
import { SongGridStyle } from '../../styles/SongGridStyle';

const SongGrid = (props) => {
	const { title } = props.song;

	return <SongGridStyle onClick={props.renderImageSong}>{title}</SongGridStyle>;
};
export default SongGrid;
