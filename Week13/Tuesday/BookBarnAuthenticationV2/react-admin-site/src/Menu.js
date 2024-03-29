import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

function Menu(props) {

    const handleSignout = () => {
        localStorage.removeItem('jsonwebtoken')
        props.onSignout()
    }

    return <ul>
        <li><NavLink to="/">Home</NavLink></li>
        {props.authenticated ? <li><NavLink to="/books/view">View Books</NavLink></li> : null}
        {props.authenticated ? <li><NavLink to="/books/add-book">Add Books</NavLink></li> : null}
        {!props.authenticated ? <li><NavLink to="/login">Login</NavLink></li> : null}
        {props.authenticated ? <li><a href="#" onClick={() => handleSignout()}>Sign Out</a></li>: null}
    </ul>

}

const mapStateToProps = (state) => {
 return {
     authenticated: state.isAuthenticated
 }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSignout: () => dispatch({type: 'SIGN_OUT'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu)