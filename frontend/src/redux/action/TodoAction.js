
import  {GET_TODO,ADD_TODO} from './TodoType';
const axios= require('axios');
export const fetchtodo=(allrecord)=>{
    return function(dispatch){
    var options = {
        url: "http://localhost:3000/API/find",
        method:"GET",
      };
      axios(options).then(res=>{
          const totolrecords=res.data.data;
        //   console.log(totolrecords)       
          dispatch(getrecord(totolrecords))
      }).catch(err=>{
          console.log(`Error should be at ${err}`)
      })   
}
}
export const getrecord=(totolrecords)=>{
    return{
        type:GET_TODO,
        payload:totolrecords
    }
}
export const addtodo=(record)=>{
    console.log(` record is ${record}`);
    var options = {
      url: "http://localhost:3000/API/insert",
      method:"POST",
      data:{ name:record},
    };
    axios(options).then(res=>{
    console.log(res)
    }).catch(err=>{
        console.log(`Error should be at ${err}`)
    })
        return{
            type:ADD_TODO,
            payload:record
        }
    
    }
