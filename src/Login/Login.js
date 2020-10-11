import { Button } from '@material-ui/core'
import React from 'react'
import { Provider } from 'react-redux'
import { auth, provider } from '../firebase'
import './Login.css'

function Login() {

    const signIn = () => {
        auth.signInWithPopup(provider).catch(error => {
            console.log(error.message);
        });
    }

    return (
        <div className="login">
            <div className="login__logo">
                <img src="iMessage-background.png" alt="" />
                <h1>iMessage</h1>
            </div>

            <Button onClick={ signIn } className="logo__signin">Sign In</Button>
        </div>
    )
}

export { Login }
