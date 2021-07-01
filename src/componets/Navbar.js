import {AppBar, makeStyles, Toolbar, Button} from '@material-ui/core';
import { NavLink} from 'react-router-dom';
import esite from "../images/esite.jpg";

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
return(
    
   <AppBar className={classes.header} position = "sticky">
  <Toolbar>
      
      <NavLink className={classes.tabs}  to ="/"><img className={classes.logo} src={esite}/></NavLink>
      <NavLink className={classes.tabs} to = "/addnewproduct">AddNewProduct</NavLink>
      <NavLink className={classes.tabs} to ="/add">AddToCart</NavLink>
      <NavLink className={classes.tabs} to ="/allproducts">AllProduct</NavLink>
      <NavLink className={classes.tabs} to ="/checkout">Checkout</NavLink>
      <Button  color="inherit">Sign In</Button>
  </Toolbar>
   </AppBar>
   
)
}


export default Navbar;