import { useState } from "react"

function Home() {
  const[valor,setValor]=useState();

  function handleOnChange(event){

setValor(event.target.value);
  }

  return (
    <div style={{paddingTop:"5rem"}}>
       <input type="text" onChange={(e)=>handleOnChange(e)} />
       <p>salida:{valor}</p>
       
    </div>
  )
}

export default Home