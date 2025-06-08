import { BaseUrl } from "../../../api/config";
import { Main } from "./CardFilms.style";
import { Link } from "react-router-dom";

interface Props {
  title: string;
  path: string;
  vote: number;
  top: boolean;
  id: string;
}

function CardFilms(props: Props) {
  const Width = {
    size1: "w92",
    size2: "w154",
    size3: "w185",
    size4: "w342",
    size5: "w500",
    size6: "w780",
    sizeO: "original",
  };

  

  function handleOnClick(id: string) {
    alert("GENIO" + id);
  }

  return (
    <div>
      <Main top={props.top} onClick={() => handleOnClick(props.id)}>
        <Link to={`/credits/${props.id}`} >
          <img
            src={`${BaseUrl}/${Width.size3}${props.path}`}
            alt="main image of film poster"
          />
          <article>
            <h4>{props.title}</h4>
            <p>{props.vote.toFixed(1)}</p>
          </article>
        </Link>
      </Main>
    </div>
  );
}

export default CardFilms;
