import { BaseUrl } from "../../../api/config";
import { Calendar, Users } from "lucide-react";
import {
  CardContainer,
  CardInner,
  PosterWrapper,
  PosterImage,
  VoteBadge,
  TopBadge,
  CardContent,
  CardTitle,
  CardOverview,
  CardFooter,
  ReleaseDate,
  VoteCount,
  LinkStyled,
} from "./CardFilms.style";

interface Props {
  title: string;
  path: string;
  vote: number;
  voteCount: number;
  overview: string;
  releaseDate: string;
  $top: boolean;
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

  const formatDate = (dateString: string) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    return date.toLocaleDateString("es-ES", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const formatVoteCount = (count: number) => {
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}K`;
    }
    return count.toString();
  };

  return (
    <CardContainer>
      <LinkStyled to={`/credits/${props.id}`}>
        <CardInner>
          <PosterWrapper>
            <PosterImage
              src={
                props.path
                  ? `${BaseUrl}/${Width.size3}${props.path}`
                  : "https://via.placeholder.com/185x278?text=No+Image"
              }
              alt={`Poster de ${props.title}`}
              onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                (e.target as HTMLImageElement).src =
                  "https://via.placeholder.com/185x278?text=No+Image";
              }}
            />
            <VoteBadge $top={props.$top}>
              <span className="vote-value">{props.vote.toFixed(1)}</span>
              <span className="vote-icon">★</span>
            </VoteBadge>
            {props.$top && <TopBadge>Top Rated</TopBadge>}
          </PosterWrapper>

          <CardContent>
            <CardTitle>{props.title}</CardTitle>
            <CardOverview>
              {props.overview
                ? props.overview.length > 100
                  ? `${props.overview.substring(0, 100)}...`
                  : props.overview
                : "Sin descripción disponible"}
            </CardOverview>

            <CardFooter>
              <ReleaseDate>
                <Calendar size={16} />
                {formatDate(props.releaseDate)}
              </ReleaseDate>
              <VoteCount>
                <Users size={16} />
                {formatVoteCount(props.voteCount)}
              </VoteCount>
            </CardFooter>
          </CardContent>
        </CardInner>
      </LinkStyled>
    </CardContainer>
  );
}

export default CardFilms;
