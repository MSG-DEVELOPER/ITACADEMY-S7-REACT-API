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

useEffect(() => {
    fetch(url, options)
      .then((res) => {
        console.log("🔍 Response completo:", res); // 👉 Acá ves la estructura del objeto Response
       

        return res.json(); // ¡Recordá retornar esto!
      })
      .then((data) => {
        console.log("📦 Data JSON parseada:", data);
        setData(data);
      })
      .catch((error) => {
        console.error("❌ Error en fetch:", error);
      });
  }, []);





  return (
    {data}
  )
}

export default useFetchData

