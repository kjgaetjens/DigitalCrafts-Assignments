import React from 'react';
import {NavLink} from 'react-router-dom'

export function Menu() {
    return <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/books/view">View Books</NavLink></li>
        <li><NavLink to="/books/add-book">Add Books</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
    </ul>
}

export function Footer() {
    return <div>Footer</div>
}

export function BaseLayout(props) {

    return (
        <div>
            <Menu />
            {props.children}
            <Footer />
        </div>
    ) 

}