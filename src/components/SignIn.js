import { Button } from '@mui/material'
import React from 'react'
import { auth } from '../firebase';
import firebase from 'firebase/compat/app';

function SignIn() {

    function signInWithGoogle(){
        const provider = new firebase.auth.GoogleAuthProvider();

        auth.signInWithPopup(provider)
    }

  return (
    <div className='loginBtn'>
        <Button onClick={signInWithGoogle} variant="contained" disableElevation>Googleでログイン</Button>
    </div>
  )
}

export default SignIn