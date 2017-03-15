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
		const selectedArticleIds = selected.map(({value}) => value)
		selectArticle(selectedArticleIds)
	}

    render() {
		const { articles, selectedArticleIds } = this.props
		const options = articles.map(({title, id}) => ({
		    label: title,
		    value: id
		}))
		const selectedArticles = options.filter(({value}) => selectedArticleIds.includes(value))

        return <Select
            options={options}
            value={selectedArticles}
            multi={true}
            onChange={this.handleChange}
        />
    }
}

export default connect(({ articles, selectedArticleIds }) => ({ articles, selectedArticleIds }), { selectArticle })(SelectFilter)
