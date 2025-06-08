import { urlAllFilms } from "../../api/config";
import CardFilms from "../../components/Films/CardFilms/CardFilms";
import Spinner from "../../components/Shared/Spinner/Spinner";
import NotFound from "../../components/Shared/NotFound/NotFound";
import { fetchThunk } from "../../redux/thunks/fetchThunk";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Body } from "./Films.style";




function Films() {

const loading = useSelector((state)=>state.fetch.loading)
const data=  useSelector((state)=>state.fetch.data)
const error = useSelector((state)=>state.fetch.error)

const dispatch = useDispatch();


useEffect( ()=>{

  dispatch(fetchThunk(urlAllFilms));
 
  

} ,[])


 


  return (
    <Body>
      {data?.results.map((item: object) => (
        <CardFilms key={item.id} title={item.title} path={item.poster_path} vote={item.vote_average} 
        top={item.vote_average > 7.5}       />
      ))}   

      {loading && <Spinner/> }
      {error && <NotFound/>}
      {console.log(data)}

    

    </Body>
  );
}

export default Films;
