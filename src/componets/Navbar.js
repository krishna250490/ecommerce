import {AppBar, makeStyles, Toolbar, Button} from '@material-ui/core';
import { Link} from 'react-router-dom';
import esite from "../images/esite.jpg";
import {StateContext} from "../updateProvider";
import React,{useContext} from "react";
import { auth } from '../firebase';

const useStyles = makeStyles({
    header:{
        background:'#111111'
    },
    tabs:{
       textDecoration:'none',
       color:'white',
       marginRight:20
    },
    logo:{
        width:'15%',
        height:'15%',
        borderRadius:'20px'
    }
    
    
})

const Navbar = ()=>{

    const classes = useStyles();
    const {state} = useContext(StateContext);
    // const {state} = useContext(StateContext);
    console.log(state.user);
    const handleAuthentication = ()=>{
        auth.signOut();
    }
return(
    
    
   <AppBar className={classes.header} position = "sticky">
  <Toolbar>
      <Link className={classes.tabs}  to ="/"><img className={classes.logo} src={esite}/></Link>
      <Link className={classes.tabs}  to ="/">Home</Link>
      <Link className={classes.tabs}  to ="/cart">cart({state.cartItems.length})</Link>
      <Link className={classes.tabs}  to ={!state.user && '/login'}>
      <div onClick={handleAuthentication}>
        <h3>Hello {state.user ? state.user?.email : 'guest'}</h3>
        <span>{state.user ? 'SignOut' : 'SignIn'}</span>
    </div>
      </Link>
  </Toolbar>
   </AppBar>
   
)
}


export default Navbar;