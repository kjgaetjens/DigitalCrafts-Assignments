import React, {useState} from 'react'
import axios from 'axios'
import {setAuthenticationHeader} from './authenticate'

function Login() {

    const [user, setUser] = useState({username: '', password:''})

    const handleInputChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const handleLogin = () => {
        axios.post('http://localhost:5000/login', {
            username: user.username,
            password: user.password
        }).then(response => {
            const token = response.data.token
            localStorage.setItem('jsonwebtoken',token)
            setAuthenticationHeader(token)
        })
    }

    return (
        <div>
            <input type="text" name="username" onChange={(e) => handleInputChange(e)} />
            <input type="password" name="password" onChange={(e) => handleInputChange(e)} />
            <button onClick={() => handleLogin()}>Login</button>
        </div>
    )

}

export default Login