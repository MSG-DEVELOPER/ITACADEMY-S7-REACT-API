import { urlAllFilms } from "../../api/config";
import CardFilms from "../../components/Films/CardFilms/CardFilms";
import Spinner from "../../components/Shared/Spinner/Spinner";
import NotFound from "../../components/Shared/NotFound/NotFound";
import { fetchThunk } from "../../redux/thunks/fetchThunk";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Body } from "./Films.style";




function Films() {

const { loading, data, error } = useSelector((state) => state.fetch);
const dispatch = useDispatch();


useEffect( ()=>{

  dispatch(fetchThunk(urlAllFilms));
 
  

} ,[dispatch])


 


  return (
    <Body>
      {data?.results.map((item: object) => (
        <CardFilms key={item.id} title={item.title} path={item.poster_path} vote={item.vote_average} 
        top={item.vote_average > 7.5} id={item.id}  />
      ))}   

      {loading && <Spinner/> }
      {error && <NotFound/>}
      {console.log(data)}

    

    </Body>
  );
}

export default Films;
