import { useParams } from "react-router-dom";
import { urlCreditBase } from "../../api/config";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCreditsThunk } from "../../redux/thunks/fetchCreditsThunk";
import Spinner from "../../components/Shared/Spinner/Spinner";
import NotFound from "../../components/Shared/NotFound/NotFound";
import CardCredits from "../../components/Credits/CardCredits/CardCredits";
import { PageWrapper, Grid, LoadingContainer } from "./Credits.style";
import type { RootState, AppDispatch } from "../../redux/store";

interface CastMember {
  id: number;
  name: string;
  profile_path: string;
  character: string;
  order: number;
}

function Credits() {
  const id = useParams().filmId;
  const url = `${urlCreditBase}${id}/credits?language=en-US`;

  const { loading, data, error } = useSelector(
    (state: RootState) => state.credits
  ) as { loading: boolean; data: { cast: CastMember[] } | null; error: boolean };

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (id) {
      dispatch(fetchCreditsThunk(url));
    }
  }, [url, dispatch, id]);

  if (loading && !data) {
    return (
      <PageWrapper>
        <LoadingContainer>
          <Spinner />
        </LoadingContainer>
      </PageWrapper>
    );
  }

  if (error && !data) {
    return (
      <PageWrapper>
        <LoadingContainer>
          <NotFound />
        </LoadingContainer>
      </PageWrapper>
    );
  }

  // Ordenar actores por order (protagonistas primero)
  const sortedCast = data?.cast
    ? [...data.cast].sort((a, b) => (a.order || 999) - (b.order || 999))
    : [];

  return (
    <PageWrapper>
      {sortedCast.length > 0 && (
        <Grid>
          {sortedCast.map((member: CastMember) => (
            <CardCredits
              key={member.id}
              name={member.name}
              path={member.profile_path}
              character={member.character}
            />
          ))}
        </Grid>
      )}

      {loading && data && (
        <LoadingContainer>
          <Spinner />
        </LoadingContainer>
      )}

      {!loading && sortedCast.length === 0 && (
        <LoadingContainer>
          <p>No se encontraron actores para esta película.</p>
        </LoadingContainer>
      )}
    </PageWrapper>
  );
}

export default Credits;
