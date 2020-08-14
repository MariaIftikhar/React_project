import GenericServices from './GenericServices'
class Typeservice extends GenericServices{
 constructor(){
     super() ;
 }
 addType=(data)=>this.post("types",data) ;
 updateType=(_id,data)=>this.put("types/"+_id,data) ;
 deleteType=(_id)=>this.delete("types/"+_id) ;
 getType=()=>this.get("types") ;
 getSingleType=(id)=>this.get("types/"+id) ;

}
let typeService = new Typeservice() ;
export default typeService ;