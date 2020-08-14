import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import typeService from '../services/TypeService';
import {withRouter }from 'react-router-dom' ;
import UserService from '../services/UserService';
const Type = (props) => {
    const {type,onDelete,history} = props ;
    return ( 
        <div style={{"padding":"1rem"}}>
           
         <h1>{type.title}</h1>
         {UserService.isAdmin()&&<>
         <Button variant="contained" color="primary" 
              onClick={(e)=>{
                typeService.deleteType        
                (type._id).then(data=>{
                    console.log(data) ;
                    onDelete() ;
                    history.push("/dance") ;

                }).catch(err=>{
                    console.log(err) ;
                })
            }}
              > Delete Type </Button>
              <br/>              <br/>

              <Button variant="contained" color="secondary" 
              onClick={(e)=>{
                   history.push("/dance/updateType/"+type._id) ;
              }}
              > Edit Type </Button>
              </>}
         
         <Grid container spacing={3}>
          <Grid item xs={3}>
         </Grid>
         <Grid item xs={6}>
             <img src={type.link} alt="home" style={{"width":"80%"}}/>
         </Grid>
         </Grid>
         <p>{type.description}</p>

        </div>
     );
}
 
export default withRouter(Type);