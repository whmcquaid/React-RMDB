import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import { StyledNavigation } from '../styles/StyledNavigation'

const Navigation = ({movie}) => {
    return (
    <StyledNavigation>
        <div className='navigation-content'>
            <Link to='/home'>
                <p>Home</p>
            </Link>
            <p>|</p>
            <p>{movie}</p>
        </div>

    </StyledNavigation>
    )
}
Navigation.prototype = {
    movie: PropTypes.string,
}
export default Navigation;
