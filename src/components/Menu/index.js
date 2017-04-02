import React, { Component, PropTypes } from 'react'
import MenuItem from './MenuItem'
import I18N from '../Localization/index'

class Menu extends Component {
    static propTypes = {

    };

	static contextTypes = {
		translate: PropTypes.func
	}

    render() {
		let translate = this.context.translate;
        return (
            <div>
                <h3>{translate('MENU_HEADER')}</h3>
                {this.props.children}
            </div>
        )
    }
}

export { MenuItem }
export default Menu
