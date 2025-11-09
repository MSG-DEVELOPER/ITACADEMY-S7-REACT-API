import { getFilmsUrl } from "../../api/config";
import CardFilms from "../../components/Films/CardFilms/CardFilms";
import Spinner from "../../components/Shared/Spinner/Spinner";
import NotFound from "../../components/Shared/NotFound/NotFound";
import { fetchThunk } from "../../redux/thunks/fetchThunk";
import { useEffect, useRef, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Body, LoadMoreContainer } from "./Films.style";
import type { RootState, AppDispatch } from "../../redux/store";

interface Film {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  overview: string;
  release_date: string;
  vote_count: number;
  backdrop_path: string;
}

function Films() {
  const { loading, films, hasMore, error, currentPage } = useSelector(
    (state: RootState) => state.fetch
  );

  const dispatch = useDispatch<AppDispatch>();
  const observerTarget = useRef<HTMLDivElement>(null);

  // Cargar la primera página al montar el componente
  useEffect(() => {
    if (films.length === 0 && !loading) {
      dispatch(fetchThunk(getFilmsUrl(1)));
    }
  }, [dispatch, films.length, loading]);

  // Función para cargar más películas
  const loadMoreFilms = useCallback(() => {
    if (!loading && hasMore) {
      const nextPage = currentPage + 1;
      dispatch(fetchThunk(getFilmsUrl(nextPage)));
    }
  }, [dispatch, loading, hasMore, currentPage]);

  // Intersection Observer para detectar cuando se llega al final
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !loading) {
          loadMoreFilms();
        }
      },
      { threshold: 0.1 }
    );

    const currentTarget = observerTarget.current;
    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, [loadMoreFilms, hasMore, loading]);

  if (error && films.length === 0) {
    return <NotFound />;
  }

  return (
    <Body>
      {films.map((item: Film) => (
        <CardFilms
          key={item.id}
          title={item.title}
          path={item.poster_path}
          vote={item.vote_average}
          voteCount={item.vote_count}
          overview={item.overview}
          releaseDate={item.release_date}
          $top={item.vote_average > 7.5}
          id={item.id.toString()}
        />
      ))}

      <LoadMoreContainer ref={observerTarget}>
        {loading && <Spinner />}
        {error && films.length > 0 && (
          <p>Error al cargar más películas. Intenta de nuevo.</p>
        )}
        {!hasMore && films.length > 0 && (
          <p>No hay más películas para mostrar</p>
        )}
      </LoadMoreContainer>
    </Body>
  );
}

export default Films;
