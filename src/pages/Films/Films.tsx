import { urlAllFilms } from "../../api/config";
import CardFilms from "../../components/Films/CardFilms/CardFilms";
import Spinner from "../../components/Shared/Spinner/Spinner";
import NotFound from "../../components/Shared/NotFound/NotFound";
import { fetchThunk } from "../../redux/thunks/fetchThunk";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Body } from "./Films.style";
import type { RootState, AppDispatch } from "../../redux/store";

interface Film {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
}

function Films() {
  const { loading, data, error } = useSelector(
    (state: RootState) => state.fetch
  ) as { loading: boolean; data: { results: Film[] } | null; error: boolean };

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchThunk(urlAllFilms));
  }, [dispatch]);

  console.log(data);

  return (
    <Body>
      {data?.results.map((item: Film) => (
        <CardFilms
          key={item.id}
          title={item.title}
          path={item.poster_path}
          vote={item.vote_average}
          $top={item.vote_average > 7.5}
          id={item.id.toString()}  // <-- convertimos a string aquí
        />
      ))}

      {loading && <Spinner />}
      {error && <NotFound />}
    </Body>
  );
}

export default Films;
