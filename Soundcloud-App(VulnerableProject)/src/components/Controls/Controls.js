import React from 'react';
import { ControlsWrapper } from '../../styles/ControlsWrapper';

const Controls = (props) => {
	const renderList = () => {
		props.renderLayout('list');
	};

	const renderGrid = () => {
		props.renderLayout('grid');
	};
	return (
		<ControlsWrapper>
			<i style={{ cursor: 'pointer' }} onClick={props.renderNewSongs} className="fas fa-2x fa-arrow-right" />
			<div className="right">
				<i
					style={{ cursor: 'pointer', marginRight: '12px' }}
					onClick={renderList}
					className="fas fa-2x fa-list"
				/>
				<i style={{ cursor: 'pointer' }} onClick={renderGrid} className="fas fa-2x fa-th-large" />
			</div>
		</ControlsWrapper>
	);
};
export default Controls;
