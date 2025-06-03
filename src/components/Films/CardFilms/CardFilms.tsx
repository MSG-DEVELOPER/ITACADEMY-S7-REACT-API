import { BaseUrl } from "../../../api/config";
import { Main } from "./CardFilms.style";

interface Props {
  title: string;
  path: string;
  vote:number;
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

  const vote  = props.vote.toFixed(1);


  return (
    <div>
      <Main>
        <img
          src={`${BaseUrl}/${Width.size3}${props.path}`}
          alt="main image of film poster" />
          <article >  
            <h4>{props.title}</h4>
            <p>{vote}</p>
          </article>
      
      </Main>
    </div>
  );
}

export default CardFilms;
