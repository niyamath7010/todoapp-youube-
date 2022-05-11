import React, { useState } from "react"
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const Main=(props)=>{


    const [expend,setExpend]=useState(false)

    const[Main,setMain]=useState({
        title:'',
        content:'',
    });



    const InputEvent=(event)=>{

        // const value= event.target.value;
        // const value= event.target.value;

        const{name , value}=event.target;

        setMain((oldDate)=>{
            return{ ...oldDate,
                [name]:value,

            }
        })
        
    }
    const addEvent=()=>{
        props.passMain(Main);
        setMain({
            
                title:'',
                content:'',
            });
            
        
      
    } 
    
    const expendIt =()=>{
        setExpend(true)
    }

    const backtonormal=()=>{
        setExpend(false)
    }
    return(
        
    <>

<div className="main_note"  onDoubleClick={backtonormal}>

    <form>

       { expend?
        <input type="text" 
        name="title"
        value={Main.title}
         onChange={InputEvent}
         placeholder="title"
          autoComplete="off"/>
:null}
          <br/>


        <textarea rows=" "
         column=" " 
         name="content"
         value={Main.content}
         onChange={InputEvent}
        
           placeholder="write a note..."
           onClick={expendIt} 
           >

        </textarea>
        {expend?
        <Button onClick={addEvent}>
           <AddIcon className="plus"/> 
           </Button>:null}

    </form>
    </div>


    </>
    )
}

export default Main;