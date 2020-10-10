import React, { Component } from 'react';

class RecentSearches extends Component {
	componentDidMount() {
		this.renderLocalStorage();
	}

	renderLocalStorage = () => {
		if (!this.props.recentSearches) {
			return;
		}
		return this.props.recentSearches.map((song, i) => <li key={i}>{song}</li>);
	};

	render() {
		return (
			<div>
				<h1 style={{ marginBottom: '30px' }}>Recent Searches</h1>
				{this.renderLocalStorage()}
			</div>
		);
	}
}
export default RecentSearches;
