import logo from "../assets/logo.png";

// Adding Header Component's CSS
// import styles from"./Header.module.css";

import { styled } from "styled-components";

// Styled Psuedo Selectors, Nested Rules and Media Queries
const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 2rem;

  & img {
    object-fit: contain;
    margin-bottom: 2rem;
    width: 11rem;
    height: 11rem;
  }

  & h1 {
    font-size: 1.5rem;
    font-weight: 600;
    letter-spacing: 0.4em;
    text-align: center;
    text-transform: uppercase;
    color: #9a3412;
    font-family: "Pacifico", cursive;
    margin: 0;
  }

  & p {
    text-align: center;
    color: #a39191;
    margin: 0;
  }

  @media (min-width: 768px) {
    & {
      margin-bottom: 4rem;
    }

    & h1 {
      font-size: 2.25rem;
    }
  }
`;

export default function Header() {
  return (
    <StyledHeader>
      <img src={logo} alt="A canvas" />
      <h1>ReactArt</h1>
      <p>A community of artists and art-lovers.</p>
    </StyledHeader>
  );
}

/*
  CSS Modules:

    Advantages:
      1. CSS code is decoupled from JSX.
      2. You know CSS and prefer it.
      3. CSS code can be written by another developer who need only a minimal access to JSX code.
      4. CSS classes are scoped to the component(files) which import them -> No CSS classes name clashes

    Disadvantage:
      1. Need to know CSS.
      2. May end up with many css files.
*/
