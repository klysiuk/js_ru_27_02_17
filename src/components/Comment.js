import React, {PropTypes}   from 'react'

function Comment(props) {
    const { text, user } = props.comment
    return (
        <div>
            <p>{text} <b>by {user}</b></p>
        </div>
    )
}


Comment.PropTypes = {
	comments: PropTypes.shape({
		// do we need to specify id as required because we pass it to React as a key?
		id: PropTypes.number.isRequired,
		title: PropTypes.string,
		user: PropTypes.string,
		text: PropTypes.string
	})
}

export default Comment
