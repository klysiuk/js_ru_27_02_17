import React, { Component, PropTypes } from 'react'

class CommentAdd extends Component {

	constructor(props) {
		super(props);
		this.state = {
			name: '',
			text: ''
		}
	}

	// variant 1

	// handleNameChange = ev => {
	// 	let name = ev.target.value;
	// 	if (name.length > 10 ) return;
	// 	this.setState({name});
	// }

	// handleTextChange = ev => {
	// 	let text = ev.target.value;
	// 	if (text.length >= 150 ) return;
	// 	this.setState({text});
	// }

	// variant 2

	handleValueChange = field => ev => {
		var value = ev.target.value;
		if (this.validate(field, value)) {
			this.setState({
				[field]: value,
			});
		}
	}

	validate = (field, value) => {
		switch (field) {
			case 'name':
				if (value.length > 10 ) return false;
			case 'text':
				if (value.length >= 150 ) return false;
			default:
				return true;
		}
	}

	render() {
		return (
			<div>
				<p><label>Add new comment</label></p>
				<p><input type="text" value={this.state.name} onChange={this.handleValueChange('name')}/></p>
				<p><textarea onChange={this.handleValueChange('text')} value={this.state.text}></textarea></p>
			</div>
		)
	}

}

export default CommentAdd;
