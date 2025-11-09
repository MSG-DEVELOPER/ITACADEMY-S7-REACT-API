import { useState } from "react";
import { BaseUrl } from "../../../api/config";
import {
  Card,
  ImageWrapper,
  Portrait,
  AvatarPlaceholder,
  AvatarInitials,
  Info,
  ActorName,
  CharacterName,
} from "./CardCredits.style";

interface Props {
  name: string;
  path: string;
  character: string;
}

function CardCredits({ name, path, character }: Props) {
  const [imageError, setImageError] = useState(false);

  // Función para obtener las iniciales del nombre
  const getInitials = (fullName: string): string => {
    const names = fullName.trim().split(" ").filter((n) => n.length > 0);
    if (names.length === 0) return "?";
    if (names.length === 1) {
      return names[0].charAt(0).toUpperCase();
    }
    return (
      names[0].charAt(0) + names[names.length - 1].charAt(0)
    ).toUpperCase();
  };

  // Función para manejar errores de carga de imagen
  const handleImageError = () => {
    setImageError(true);
  };

  const hasImage = path && path.trim() !== "" && !imageError;
  const imageSrc = hasImage ? `${BaseUrl}/w342${path}` : "";
  const initials = getInitials(name);

  return (
    <Card>
      <ImageWrapper>
        {hasImage ? (
          <Portrait src={imageSrc} alt={name} onError={handleImageError} />
        ) : (
          <AvatarPlaceholder>
            <AvatarInitials>{initials}</AvatarInitials>
          </AvatarPlaceholder>
        )}
      </ImageWrapper>
      <Info>
        <ActorName>{name}</ActorName>
        <CharacterName>{character || "Sin personaje"}</CharacterName>
      </Info>
    </Card>
  );
}

export default CardCredits;