import React from 'react';
import Type from './type';
import axios from 'axios'
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import typeService from '../services/TypeService';
import UserService from '../services/UserService';
const Dance = () => {
    const [types,setTypes] = React.useState([]) ;
    const getData=()=>{
       typeService.getType().then(data=>{
            setTypes(data) ;
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
        </div>
     );
}
 
export default Dance;