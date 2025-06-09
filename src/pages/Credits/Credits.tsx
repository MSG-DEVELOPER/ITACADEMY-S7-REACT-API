import { useParams } from "react-router-dom";
import { urlCreditBase } from "../../api/config";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCreditsThunk } from "../../redux/thunks/fetchCreditsThunk";
import Spinner from "../../components/Shared/Spinner/Spinner";
import NotFound from "../../components/Shared/NotFound/NotFound";
import CardCredits from "../../components/Credits/CardCredits/CardCredits";
import { PageWrapper, Grid } from "./Credits.style";

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
      <PageWrapper>
        <Grid>
          {data?.cast.map((member: any) => (
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
