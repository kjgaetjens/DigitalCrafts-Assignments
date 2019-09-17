import React from 'react';
import Menu from './Menu'


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