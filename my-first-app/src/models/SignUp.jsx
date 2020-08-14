import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import UserService from '../services/UserService';
import Button from '@material-ui/core/Button';
import { toast } from 'react-toastify';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));
const Signup = (props) => {
    const classes=useStyles() ;
    const [name,setName]=React.useState("maria") ;
    const [email,setEmail]=React.useState("mariaiftikhar2@gmail.com") ;
    const [password,setPassword] = React.useState("merryvicky") ;

    return ( 
        <div >
             <h1 style={{"padding":"2rem"}}> Want to Explore The Dance World?</h1>
             
              <h1 style={{"padding":"2rem"}}> Hurry Up Sign Up Now</h1>
        <Grid container spacing={3}>
              
          <Grid item xs={2}>
         </Grid>
         <Grid item xs={9}>
         <form className={classes.root} noValidate autoComplete="off">
         <TextField id="outlined-basic" label="Name" value={name} variant="outlined" onChange={(e)=>{
           setName(e.target.value) ;
         }}  />
        <TextField id="outlined-basic" label="Email" value={email} variant="outlined" onChange={(e)=>{
           setEmail(e.target.value) ;
         }} />
        <TextField id="outlined-basic" label="Password" value={password} variant="outlined" type="password" onChange={(e)=>{
           setPassword(e.target.value) ;
         }} />
         <br/>
         <Button variant="contained" color="primary" 
            onClick={e=>{
          UserService.register(name,email,password).then((data)=>{
            console.log(data) ;
            props.history.push("/login") ;
          })
          .catch(err=>{
            console.log(err) ;
          toast.error(err.response.data, {
             position: toast.POSITION.TOP_CENTER
            });
          })
            }
            }
              >Sign Up</Button>



      </form>
         </Grid>
         </Grid>
         </div>
      );
}
 
export default Signup;