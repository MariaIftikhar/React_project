import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import UserService from '../services/UserService';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));
  
const Login = () => {
  const [email,setEmail]=React.useState("mariaiftikhar2@gmail.com") ;
  const [password,setPassword] = React.useState("merryvicky") ;
    const classes=useStyles() ;
    return ( 
        <div >
             <h1 style={{"padding":"2rem"}}> Welcome to The Amazing World Of Dancing</h1>
              <h1 style={{"padding":"2rem"}}> Log In First To Continue</h1>
        <Grid container spacing={3}>
              
          <Grid item xs={4}>
         </Grid>
         <Grid item xs={7}>
         <form className={classes.root} noValidate autoComplete="off">
        <TextField id="outlined-basic" label="Email" variant="outlined" value={email} 
        onChange={e=>{
          setEmail(e.target.value) ;
        }} />
        <TextField id="outlined-basic" label="Password" variant="outlined" type="password" value={password}
        onChange={e=>{
          setPassword(e.target.value) ; }}
          />
        <br/>
        <Button variant="contained" color="primary" 
            onClick={e=>{
          UserService.login(email,password).then((data)=>{
            console.log(data) ;
            window.location.href="/" ;
          }).catch(err=>{
            
      
            console.log(err) ;
          })
            }
            }
              > Log In</Button>

      </form>
         </Grid>
         </Grid>
         </div>
        
     );
}
 
export default Login;