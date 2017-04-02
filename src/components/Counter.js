import React, { Component, PropTypes } from 'react'
import {connect} from 'react-redux'
import {increment} from '../AC/index'
import {Redirect} from 'react-router-dom'

class Counter extends Component {
    static propTypes = {
        count: PropTypes.number
    };

	static contextTypes = {
		translate: PropTypes.func
	}

    render() {
        const {count} = this.props
        if (count > 5) return <Redirect to="/filters"/>
		let translate = this.context.translate;
        return (
            <div>
                <h3>{translate('COUNT')}: {count}</h3>
                <a href="#" onClick={this.handleIncrement}>{translate('INCREMENT_ME')}</a>
            </div>
        )
    }

    handleIncrement = (ev) => {
        ev.preventDefault()
        this.props.dispatchIncrement()
    }
}

export default connect(state => ({
    count: state.count
}), {
    dispatchIncrement: increment
})(Counter)
