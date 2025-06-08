import { NotFoundContainer, NotFoundTitle, NotFoundMessage } from "./NotFound.style";

function NotFound() {
  return (
    <NotFoundContainer>
      <NotFoundTitle>Error 404</NotFoundTitle>
      <NotFoundMessage>No se pudieron cargar los datos. Inténtalo más tarde.</NotFoundMessage>
    </NotFoundContainer>
  );
}

export default NotFound;
