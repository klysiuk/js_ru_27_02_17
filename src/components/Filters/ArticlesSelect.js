import React, { Component, PropTypes } from 'react'
import Select from 'react-select'
import {connect} from 'react-redux'
import {selectArticle} from '../../AC'

import 'react-select/dist/react-select.css'

class SelectFilter extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    };

    handleChange = selected => {
		const {selectArticle} = this.props
		selectArticle(selected)
	}

    render() {
        const { articles, selectedArticles } = this.props
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))

        return <Select
            options={options}
            value={selectedArticles}
            multi={true}
            onChange={this.handleChange}
        />
    }
}

export default connect(state => {
    return {
        articles: state.articles,
		selectedArticles: state.selectedArticles
    }
}, {selectArticle})(SelectFilter)
