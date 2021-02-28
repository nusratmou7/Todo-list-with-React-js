import React, { useState } from 'react';
import List from './List';


const App=()=>{

   const[list,setList]=useState('')
   const[itm,setItm]=useState([])

   const input=(e)=>{
setList(e.target.value)
   } 
   const iten=()=>{
      setItm((olditm)=>{
         return[...olditm,list]
      })
      setList('')
      }

      const deletei=(id)=>{
         setItm((olditm)=>{
            return olditm.filter((arrE,index)=>{
               return index!== id
            })
         })
      }
return(
 <>
 <div className='main_div'>
<div className='center_div'>
   <br/>
   <h1>ToDo List</h1>
   <br/>
   <input type='text' placeholder='add to list'onChange={input} value={list}/>
   <button onClick={iten}> + </button>


   <ol>
     { itm.map((ival,index)=>{
     return  <List key={index} id={index} text={ival}
        onSelect={deletei}
     />
        
      })}
   </ol>
</div>
 </div>


  </>                            
 )

















   }
export default App