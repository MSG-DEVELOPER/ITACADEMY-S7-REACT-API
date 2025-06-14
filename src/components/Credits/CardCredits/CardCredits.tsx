import { BaseUrl } from "../../../api/config";

import {
  Card,
  ImageWrapper,
  Portrait,
  Info,
  ActorName,
  CharacterName,
} from "./CardCredits.style";

interface Props{
    name:string;
    path:string;
    character:string;
}



function CardCredits({ name, path, character }: Props) {
  const src = path
    ? `${BaseUrl}/w185${path}`
    : "https://via.placeholder.com/185x278?text=Sin+Imagen";

  return (
    <Card>
      <ImageWrapper>
        <Portrait src={src} alt={name} />
      </ImageWrapper>
      <Info>
        <ActorName>{name}</ActorName>
        <CharacterName>{character}</CharacterName>
      </Info>
    </Card>
  );
}

export default CardCredits