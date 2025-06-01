import useFetchData from "../../hooks/useFetchData";
import { urlAllFilms } from "../../api/config";

function Films() {
  const data : object | null = useFetchData(urlAllFilms);
      
  if (!data) return <p>Cargando...</p>;


  return (
    <div>
      {data?.results.map((item: object) => (
        <p key={item.id}>{item.title} {item.id}</p> 
      ))}
    </div>
  );
}

export default Films;
