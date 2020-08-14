import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import typeService from '../services/TypeService';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));
  
const NewType = (props) => {
    const [title,setTitle] = React.useState("") ;
    const [description,setDescription] = React.useState("") ;
    const [link,setLink] = React.useState("") ;
    const classes=useStyles() ;
    return (  
        <div >
             <h1 style={{"padding":"2rem","fontSize":"2vw"}}>Add New Type</h1>
        <Grid container spacing={3}>       
          <Grid item xs={4}>
         </Grid>
         <Grid item xs={7}>
         <form className={classes.root} noValidate autoComplete="off">
        <TextField id="outlined-basic" label="Title" variant="outlined" 
        onChange={(e)=>{ setTitle(e.target.value) ; }}/>
        <TextField id="outlined-basic" label="Description" variant="outlined"
                onChange={(e)=>{ setDescription(e.target.value) ; }}/>
        <TextField id="outlined-basic" label="Link" variant="outlined"    
              onChange={(e)=>{ setLink(e.target.value) ; }}/>
              <Button variant="contained" color="primary" 
              onClick={(e)=>{
                  console.log("sending Api call") ;
                  typeService.addType
                  ({title,description,link}).then(data=>{
                      console.log(data) ;
                      props.history.push("/dance") ;
                  }).catch(err=>{
                      console.log(err) ;
                  })
              }}
              > Add Type </Button>

      </form>
         </Grid>
         </Grid>
         <h1>{title}</h1>
         <h1>{description}</h1>
         <h1>{link}</h1>
         </div>
    );
}
 
export default NewType;