import React, { useState } from "react"
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import Note from "./Note";
const App=()=>{

  const [addItems,setaddItems]=useState([]);

  const addMain=(Main)=>{
    // alert("iam clicked");

    setaddItems((oldData)=>{
      return[...oldData,Main]
    })

   // console.log(Main)
  }

  const onDelete=(id)=>{
    setaddItems((prevData)=>
      prevData.filter((currdata,index)=>{
        return index !== id;
      })
    )

  }

  return(
    <>
  <Header />
  <Main passMain={addMain}/>
  
    {addItems.map((val,index)=>{
      return(
       <Note 
        key={index}
        id={index} 
        title={val.title} 
        content={val.content}
        deleteItems={onDelete}
        />
      )
    })}

  <Footer />
    


    </>
  )
}


export default App;