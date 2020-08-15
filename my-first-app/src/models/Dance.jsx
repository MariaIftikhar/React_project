import React from 'react';
import Type from './type';
import axios from 'axios'
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import typeService from '../services/TypeService';
import UserService from '../services/UserService';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
}));
const Dance = (props) => {
    const classes = useStyles();
    const [types,setTypes] = React.useState([]) ;
    const [total,setTotal] = React.useState(0) ;
    const page = props.match.params.page ? props.match.params.page:1 ;
    const getData=()=>{
       typeService.getType(page).then(data=>{
        setTotal(data.total) ;
            setTypes(data.types) ;
        }).catch(error=>{
            console.log(error) ;
        })
    }
   // getData() ;
     React.useEffect(getData,[]) ;
    return ( 
        <div>
            <h1>Popular Styles of Dance</h1> 
            {UserService.isAdmin()&&<Button variant="contained" color="secondary" >
            <Link to='/dance/newType' >Add new Type</Link>
            </Button>}
            
             {types.map((type,index)=>(
            <Type key={index} type={type} onDelete={getData()} />
             ))} ;
             <Grid container spacing={3}>
              
              <Grid item xs={3}>
              <h2>Total Types : {total} </h2>
             </Grid> 
             <Grid item xs={9}>
             <Pagination count={Math.ceil(total/10)} color="secondary" />

             </Grid>             </Grid>

        </div>
     );
}
 
export default Dance;