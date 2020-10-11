import React, { Component } from 'react';
import { Input, Button } from '@smooth-ui/core-sc';

class SearchForm extends Component {
	state = {
		searchTerm: ''
	};

	handleSubmit = (e) => {
		e.preventDefault();

		if (!this.state.searchTerm) {
			return null;
		}
		this.props.fetchSongs(this.state.searchTerm);
		this.props.addToLocalStorage(this.state.searchTerm);
		this.setState({ searchTerm: '' });
	};

	render() {
		return (
			<form style={{ display: 'flex', marginBottom: '20px' }} onSubmit={this.handleSubmit}>
				<Input
					style={{ borderTopRightRadius: '0', borderBottomRightRadius: '0', flexGrow: '1' }}
					onChange={(e) => this.setState({ searchTerm: e.target.value })}
					value={this.state.searchTerm}
					type="text"
					placeholder="Search"
				/>
				<Button
					style={{ borderTopLeftRadius: '0', borderBottomLeftRadius: '0', lineHeight: '1.65' }}
					variant="dark"
					type="submit"
				>
					Go
				</Button>
			</form>
		);
	}
}
export default SearchForm;
