import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import {StateContext} from "../updateProvider";
import { auth } from "../firebase";
import esite from "../images/esite.jpg";
import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles({
  
  
  logo:{
      width:'15%',
      height:'15%',
      borderRadius:'20px'
  }
  
  
})

function Login() {
  const classes = useStyles();
  const history = useHistory();
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');

  const signIn = (e)=>{
      e.preventDefault();
      //we are using firebase login here.......

    auth
        .signInWithEmailAndPassword(email, password)
        .then((auth)=>{
            history.push('./')
        })
        .catch((error)=>alert(error.message));

  }

  const register = (e)=>{
      e.preventDefault();
   // we are using firebase register here......

   auth
       .createUserWithEmailAndPassword(email, password)
       .then((auth)=>{
         if(auth){
           history.push('/')

         }
       })
       .catch((error)=>alert(error.message))
   
  }

  return (
    <div className="login">
      <Link to="/">
      <img className={classes.logo} src={esite}/>
      </Link>
      <div className="login__container">
        <h1>Sign-UP</h1>
        <form>
          <h5>Email</h5>
          <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>

          <h5>Password</h5>
          <input type="password" value ={password} onChange={(e)=>setPassword(e.target.value)}/>

          <button type = "submit" className='login__signInButton' onClick={signIn}>Sign In</button>
        </form>

        <p>
          By signing-in you agree to the SHOPPING STORE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>

        <button className='login__registerButton' onClick={register}>Create Your SHOPPING STORE Account</button>
      </div>
    </div>
  );
}

export default Login;