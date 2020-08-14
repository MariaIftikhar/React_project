import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import UserService from '../services/UserService';
const useStyles = makeStyles((theme) => ({
    l1:{
        fontFamily:"bold",
        color:"white" ,
        padding:"1rem",
        fontSize:"2vw"
    },
    l2:{
      textAlign:"center",
      backgroundColor:"black" 
    }
  }));
  
const Menu = () => {
    const styles = useStyles() ;
    return (  
<AppBar position="static" className = {styles.l2}>
  <Toolbar>
    <Typography variant="h6" >
    <Link to="/" className = {styles.l1}>Home</Link>   
     </Typography>
    <Typography variant="h6" >
    <Link to="/dance" className = {styles.l1}>Dance</Link>   
    </Typography>
    {!UserService.isLoggedIn()?<>
    <Typography variant="h6">
    <Link to="/login" className = {styles.l1}>Log In</Link>   
    </Typography>
    <Typography variant="h6">
    <Link to="/signup" className = {styles.l1}>Sign Up</Link>   
    </Typography>
    </>:<Button variant="contained" color="primary"
    onClick={(e)=>{
      UserService.logout() ;
    window.location.reload() ;
  }}
>Log Out {UserService.getLoggedInUser().name} </Button>
    }
    
  </Toolbar>
</AppBar>
    );
}
 
export default Menu;