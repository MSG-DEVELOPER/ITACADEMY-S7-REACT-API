import { useParams } from "react-router-dom"


function Credits() {

     const id=useParams().filmId;
     
  return (
    <div>Credits {id} </div>
  )
}

export default Credits