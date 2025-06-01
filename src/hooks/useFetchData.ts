import { useEffect,useState} from "react";
import { Authorization } from "../api/config";


function useFetchData(url : string):object|null{
    
const[data,setData] = useState<object|null>(null);

 

useEffect(() => {

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization,
    },
  };
    fetch(url, options)
      .then((res) => { return res.json();})
      .then((data) => {setData(data);})
      .catch((error) => {console.error("❌ Error en fetch:", error);});
  }, [url]);





  return data;
  
}

export default useFetchData

