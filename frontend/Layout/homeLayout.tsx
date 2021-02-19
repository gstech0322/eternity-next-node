import styled from "styled-components";

export const SideNavbar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 200px;
`;

export const Links = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;
  letter-spacing: 0.1rem;

  a {
    opacity: 70%;
    margin: 0.7em 0;

    :hover {
      opacity: 100%;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  height: calc(100vh - 7em);
  width: 100%;
`;

export const SocialLinks = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SocialIconsWrapper = styled.div`
  background-color: white;
  height: 3em;
  width: 3em;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1em;
  opacity: 70%;

  :hover {
    opacity: 100%;
  }

  svg {
    display: flex;
    align-items: center;
    justify-content: center;
    color: black;
    height: 1.5em;
    width: 1.5em;
  }
`;

export const MainContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const ImageContent = styled.div`
  width: 500px;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 500px;
  height: 700px;
  img {
    object-fit: contain;
    max-width: 100%;
    max-height: 100%;
  }
`;

export const Description = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
`;
