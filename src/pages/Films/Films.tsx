import useFetchData from "../../hooks/useFetchData";
import { urlAllFilms } from "../../api/config";
import CardFilms from "../../components/Films/CardFilms/CardFilms";
import { Body } from "./Films.style";

function Films() {
  const data : object | null = useFetchData(urlAllFilms);
      
  if (!data) return <p>Cargando...</p>;


  return (
    <Body>
      {data?.results.map((item: object) => (
        <CardFilms key={item.id} title={item.title} path={item.poster_path} vote={item.vote_average} 
        top={item.vote_average > 7.5}/>
      ))}
    </Body>
  );
}

export default Films;
