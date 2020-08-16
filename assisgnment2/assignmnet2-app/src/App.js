import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

let var1 = 1 ;
let var2=1 ;
 function Check1(){
  if(var1==1){
  var inputs = document.getElementsByName('1');
  for (var i = 0; i < inputs.length; i++) { 
       inputs[i].checked = false; 
       inputs[i].disabled =true; 
         
   }  var1 = 2 ;
   
  }
  else{
    var inputs = document.getElementsByName('1');
    for (var i = 0; i < inputs.length; i++) { 
         inputs[i].checked = false; 
         inputs[i].disabled =false; 
           
     }  var1 = 1 ;
    }
   }

 
 function Check2(){
  if(var2==1){
  var inputs = document.getElementsByName('2');
  for (var i = 0; i < inputs.length; i++) { 
       inputs[i].checked = false; 
       inputs[i].disabled =true; 
         
   }  var2 = 2 ;
   
  }
  else{
    var inputs = document.getElementsByName('2');
    for (var i = 0; i < inputs.length; i++) { 
         inputs[i].checked = false; 
         inputs[i].disabled =false; 
           
     }  var2 = 1 ;
    }
   }
function App() {
  return (
    <div>
      <br/>
      <h1 style={{ "paddingLeft":"500px"}}>Assessement 2</h1>
         <p style={{ "paddingLeft":"300px"}}> Suppose you are developing a portal for reant a car companies. Companies have already been registered <br/> and have added their vehicles and basic mileage rates from one destination to another. Below is a form in  <br/> which they are required for adding uplift amounts if another vehicle other than their base vehicle is selected.</p>
    <Paper variant="outlined" >
      <Grid container spacing={1} style={{"backgroundColor":"#C0C0C0"}} >
        <Grid item xs={2}>
          <h5 style={{ "paddingLeft":"10px"}}>Estate</h5>
        </Grid>
        <Grid item xs={2}>
          <h5>5-6 Passengers</h5>
        </Grid>
        <Grid item xs={2}>
          <h5>7 Passengers</h5>
        </Grid>
        <Grid item xs={2}>
          <h5>8 Passengers</h5>
        </Grid>
        <Grid item xs={2}>
          <h5>9 Passengers</h5>
        </Grid>
        <Grid item xs={2}>
          <h5>14 Passengers</h5>
        </Grid>
        </Grid>
        
        <Grid container spacing={1} style={{"backgroundColor":"#DCDCDC"}} >
        <Grid item xs={2}>
        <input name="1" type="checkbox" style={{"width":"30px"}} color="black" onClick={Check2} ></input>
        <input type="text" name="1" style={{"width":"30px"}}/> %       
        </Grid>
        <Grid item xs={2}>
        <input name="1" type="checkbox" style={{"width":"30px"}} color="black" onClick={Check2}></input>
        <input type="text" name="1" style={{"width":"30px"}}/> %   
        </Grid>    
        <Grid item xs={2}>
        <input name="1" type="checkbox" style={{"width":"30px"}} color="black" onClick={Check2}></input>
        <input type="text" name="1" style={{"width":"30px"}}/> %     
        </Grid>   
        <Grid item xs={2}>
        <input name="1" type="checkbox" style={{"width":"30px"}} color="black"onClick={Check2} ></input>
        <input type="text" name="1" style={{"width":"30px"}}/> %   
        </Grid>     
        <Grid item xs={2}>
        <input name="1" type="checkbox" style={{"width":"30px"}} color="black" onClick={Check2} ></input>
        <input type="text" name="1" style={{"width":"30px"}}/> %   
        </Grid>      
        <Grid item xs={2}>
        <input name="1" type="checkbox" style={{"width":"30px"}} color="black" onClick={Check2}></input>
        <input type="text" name="1" style={{"width":"30px"}}/> %        
        </Grid>
        </Grid>
        <Grid container spacing={1}  style={{"backgroundColor":"#E8E8E8"}}>
        <Grid item xs={2}>
        <input name="2" type="checkbox" style={{"width":"30px"}} color="black" onClick={Check1} ></input>
        <input type="text"name="2" style={{"width":"30px"}}/> £       
        </Grid>
        <Grid item xs={2}>
        <input name="2" type="checkbox" style={{"width":"30px"}} color="black" onClick={Check1} ></input>
        <input type="text" name="2" style={{"width":"30px"}}/> £    
        </Grid>    
        <Grid item xs={2}>
        <input name="2" type="checkbox" style={{"width":"30px"}} color="black" onClick={Check1}></input>
        <input type="text" name="2" style={{"width":"30px"}}/> £     
        </Grid>   
        <Grid item xs={2}>
        <input name="2" type="checkbox" style={{"width":"30px"}} color="black" onClick={Check1} ></input>
        <input type="text" name="2" style={{"width":"30px"}}/> £ 
        </Grid>     
        <Grid item xs={2}>
        <input name="2" type="checkbox" style={{"width":"30px"}} color="black" onClick={Check1} ></input>
        <input type="text" name="2" style={{"width":"30px"}}/> £ 
        </Grid>      
        <Grid item xs={2}>
        <input name="2" type="checkbox" style={{"width":"30px"}} color="black" onClick={Check1}></input>
        <input type="text" name="2" style={{"width":"30px"}}/> £      
        </Grid>
        </Grid>

    </Paper>

   </div>
  );
}

export default App;
