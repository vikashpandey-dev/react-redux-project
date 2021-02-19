import React,{useState} from 'react'
import {connect} from 'react-redux'
import {addtodo} from '../redux/index'

function Addrecord() {
    const [name, setName] = useState('')

    function handleform(){
        addtodo(name)
    }
    return (
        <div>
            <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} /><br />
            <button onClick={handleform}>Add Data</button>
        </div>
    )
}
const mapStateToProps = (state) => ({

})
const mapDispatchToProps =(dispatch)=> {

return{
    adddata:function(name){
    dispatch(addtodo(name))
    }
}
    
}
export default connect(mapStateToProps, mapDispatchToProps)(Addrecord)