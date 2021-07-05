import {AppBar, makeStyles, Toolbar, Button} from '@material-ui/core';
import { Link} from 'react-router-dom';
import esite from "../images/esite.jpg";
import {StateContext} from "../updateProvider";
import React,{useContext} from "react";

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
    const {cartItems} = useContext(StateContext);
return(
    
   <AppBar className={classes.header} position = "sticky">
  <Toolbar>
      <Link className={classes.tabs}  to ="/"><img className={classes.logo} src={esite}/></Link>
      <Link className={classes.tabs}  to ="/">Home</Link>
      <Link className={classes.tabs}  to ="/cart">cart({cartItems.length})</Link>
      
      <Button  color="inherit">Sign In</Button>
  </Toolbar>
   </AppBar>
   
)
}


export default Navbar;