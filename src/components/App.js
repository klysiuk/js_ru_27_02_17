import React, { Component, PropTypes } from 'react'
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom'
import {ConnectedRouter} from 'react-router-redux'
import {connect} from 'react-redux'
import ArticlesPage from './ArticlesPage'
import NotFound from './NotFound'
import Filters from './Filters/index'
import Counter from './Counter'
import CommentsPage from './CommentsPage'
import Menu, {MenuItem} from './Menu/index'
import {loadAllArticles} from '../AC'
import history from '../history'
import LanguagePicker from './languagePicker'
import I18N from './Localization/index'

class App extends Component {
    static propTypes = {
    };

    static childContextTypes = {
        user: PropTypes.string,
		translate: PropTypes.func
    }

    state = {
        text: '',
		language: "en"
    }

    getChildContext() {
        return {
            user: this.state.text,
			translate: I18N(this.state.language)
        }
    }

    componentDidMount() {
        this.props.loadAllArticles()
    }

    render() {
		let translate = I18N(this.state.language);
        return (
            <ConnectedRouter history={history}>
                <div>
					<LanguagePicker setLanguage={this.setLanguage} language={this.state.language}/>
                    {translate('ENTER_YOUR_NAME')}: <input type="text" value={this.state.text} onChange={this.handleTextChange}/>
                    <Menu>
                        <MenuItem path="/counter"/>
                        <MenuItem path="/filters"/>
                        <MenuItem path="/articles"/>
                        <MenuItem path="/comments"/>
                    </Menu>
                    <Switch>
                        <Route path="/counter" component={Counter} exact />
                        <Route path="/filters" component={Filters} />
                        <Route path="/articles" component={ArticlesPage} />
                        <Route path="/comments/:page" component={CommentsPage} />
                        <Redirect from="/comments" to="/comments/1"/>
                        <Route path="*" component={NotFound} />
                    </Switch>
                </div>
            </ConnectedRouter>
        )
    }

	setLanguage = ev => {
		this.setState({
            language: ev.target.value
        })
	}

    handleTextChange = ev => {
        if (ev.target.value.length > 10) return

        this.setState({
            text: ev.target.value
        })
    }
}

export default connect(null, { loadAllArticles })(App)
