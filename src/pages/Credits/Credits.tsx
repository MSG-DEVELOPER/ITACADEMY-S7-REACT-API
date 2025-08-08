import { useParams } from "react-router-dom";
import { urlCreditBase } from "../../api/config";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCreditsThunk } from "../../redux/thunks/fetchCreditsThunk";
import Spinner from "../../components/Shared/Spinner/Spinner";
import NotFound from "../../components/Shared/NotFound/NotFound";
import CardCredits from "../../components/Credits/CardCredits/CardCredits";
import { PageWrapper, Grid } from "./Credits.style";
import type { RootState, AppDispatch } from "../../redux/store";

interface CastMember {
  id: number;
  name: string;
  profile_path: string;
  character: string;
}

function Credits() {
  const id = useParams().filmId;
  const url = `${urlCreditBase}${id}/credits?language=en-US`;

  const { loading, data, error } = useSelector(
    (state: RootState) => state.credits
  ) as { loading: boolean; data: { cast: CastMember[] } | null; error: boolean };

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchCreditsThunk(url));
  }, [url, dispatch]);

  return (
    <div>
      <PageWrapper>
        <Grid>
          {data?.cast.map((member: CastMember) => (
            <CardCredits
              key={member.id}
              name={member.name}
              path={member.profile_path}
              character={member.character}
            />
          ))}
        </Grid>
      </PageWrapper>

      <section>
        {loading && <Spinner />}
        {error && <NotFound />}
      </section>
    </div>
  );
}

export default Credits;
