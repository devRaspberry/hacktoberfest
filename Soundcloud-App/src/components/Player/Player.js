import React from 'react';

import { PlayerStyle } from '../../styles/PlayerStyle';

const Player = (props) => {
	const renderIframe = () => {
		return {
			__html: props.oEmbed
		};
	};

	return (
		<PlayerStyle>
			<div className="player" onClick={() => props.playSong()}>
				{props.selectedSong}
			</div>
			<div className="oEmbed" dangerouslySetInnerHTML={renderIframe()} />
		</PlayerStyle>
	);
};
export default Player;
