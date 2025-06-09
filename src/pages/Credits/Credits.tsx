import { useParams } from "react-router-dom";
import { urlCreditBase  } from "../../api/config";
import { useEffect } from "react";
import { useDispatch,useSelector} from "react-redux";
import { fetchCreditsThunk } from "../../redux/thunks/fetchCreditsThunk";
import Spinner from "../../components/Shared/Spinner/Spinner";
import NotFound from "../../components/Shared/NotFound/NotFound";

function Credits() {
  const id = useParams().filmId;
  const url=`${urlCreditBase}${id}/credits?language=en-US`;
  const {loading,data,error} = useSelector((state) => state.credits);
  const dispatch = useDispatch();

useEffect( ()=>{

    dispatch(fetchCreditsThunk(url));
    

}, [url,dispatch])

  return(
     <div>
        Credits {id} 
        {console.log(data)}  
        {/* /*contiene data.cast y data.crew*/ }
        {loading && <Spinner/> }
        {error && <NotFound/>}
    
     
     </div>
  )
}

export default Credits;



