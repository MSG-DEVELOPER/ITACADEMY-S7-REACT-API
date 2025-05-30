import { useEffect,useState} from "react";
import { url,Authorization } from "../api/config";


function useFetchData():object|null{
    
const[data,setData] = useState<object|null>(null);

 const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization,
    },
  };

useEffect( ()=>{

  fetch(url,options)
      .then((res)=>res.json())
      .then((data)=>setData(data))
      .catch(er=>console.log(er))
      
    

} ,[]);






  return (
    {data}
  )
}

export default useFetchData

