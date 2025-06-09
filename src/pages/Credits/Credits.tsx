import { useParams } from "react-router-dom";
import { urlCreditBase } from "../../api/config";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCreditsThunk } from "../../redux/thunks/fetchCreditsThunk";
import Spinner from "../../components/Shared/Spinner/Spinner";
import NotFound from "../../components/Shared/NotFound/NotFound";
import CardCredits from "../../components/Credits/CardCredits/CardCredits";

function Credits() {
  const id = useParams().filmId;
  const url = `${urlCreditBase}${id}/credits?language=en-US`;
  const { loading, data, error } = useSelector((state) => state.credits);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCreditsThunk(url));
  }, [url, dispatch]);

  return (
    <div>
      <section>
        {/* /*contiene data.cast y data.crew*/}
        {loading && <Spinner />}
        {error && <NotFound />}
      </section>

      <img
        src="https://image.tmdb.org/t/p//w154/izTspHKOpOAslVtlOsMv89o0rNe.jpg"
        alt="Actor/Actriz principal"
      />
        {data && console.log(data.cast[0].name)}
      {/* src={`${BaseUrl}/${Width.size3}${props.path}`}*/}

        {/* {data?.results.map((item: object) => (
        <CardFilms key={item.id} title={item.title} path={item.poster_path} vote={item.vote_average} 
        top={item.vote_average > 7.5} id={item.id}  />
      ))}    */}
        {data?.cast.map((item:object)=>(
          <CardCredits name={item.name}/>
        ))}

          {/* {console.log(data.cast)} */}
      {/* {data.cast.map((item,index)=>{

        <p> {item.name}  </p>

      })}; */}

    </div>
  );
}

export default Credits;
