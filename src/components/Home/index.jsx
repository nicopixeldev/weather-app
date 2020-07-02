import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import logic from '../../logic'
import Search from '../Search'
import Results from '../Results'

class Home extends Component {

    state = { query: '', results: false }

    handleQueryInput = ({ target: { value: query } }) => this.setState({ query: query.trim() })

    handleSubmit = async event => {
        event.preventDefault()
        this.handleSearch()
    }

    handleSearch = async () => {
        try {
            const { state: { query } } = this
            const results = await logic.getWeatherByCityName(query)
            this.setState({ results })
            this.props.history.push(`/${query}`)
        } catch ({ message }) {
            console.log(message)
        }
    }

    componentDidMount = () => {
        const { state: { query }, props: { match: { params } } } = this
        if (params.hasOwnProperty('query') && query !== params.query)
            this.setState({ query: params.query })
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevState.query !== this.state.query)
            this.handleSearch()
    }

    render() {
        const { state: { query, results }, handleSubmit } = this
        return (
            <section className="home">
                <Search query={query} onSubmit={handleSubmit} onChange={this.handleQueryInput} />
                {results && query.length > 0 && <Results query={query} results={results} />}
            </section>
        )
    }
}

export default withRouter(Home)