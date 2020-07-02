import React from 'react'
import { withRouter } from 'react-router-dom'

const Search = ({ query, onSubmit, onChange }) => (
    <form className="search" onSubmit={onSubmit}>
        <div className="search__formField">
            <input
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                className="search__formField__input"
                placeholder="search for a city"
                spellCheck="false"
                type="text"
                onChange={onChange}
                value={query}
            />
        </div>
        <button className="search__button" type="submit">Search</button>
    </form>

)

export default withRouter(Search)