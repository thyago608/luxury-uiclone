import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.div`
  height: 100vh;

  .wrapper {
    width: 100%;
    max-width: 1080px;
    margin: 0 auto;
    padding: 3rem;

    @media (max-width: 720px) {
      padding: 2rem;
    }
  }
`;

export const Main = styled.main`
  margin-top: 6rem;
  display: flex;

  @media (max-width: 720px) {
    flex-direction: column;
  }

  @media (min-width: 1080px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Section = styled.section`
  flex: 1;

  > header {
    h1 {
      font-size: 2.5rem;
      color: white;
      display: flex;
      flex-wrap: wrap;
      line-height: 3rem;

      > span {
        width: 100%;
      }
    }
  }

  > p {
    margin-top: 1rem;
    font-size: 1rem;
    color: gray;
    line-height: 1.4rem;
  }

  .container-input-button {
    margin-top: 2rem;
    display: flex;
    align-items: stretch;

    > input {
      height: 40px;
      padding: 0.6rem 0 0.6rem 1rem;
      font-size: 1rem;
      background: gray;
      filter: brightness(0.8);
      border-radius: 0.5rem 0 0 0.5rem;
      border: 1px solid ${darken(0.1, "#dcdde1")};
      outline-color: transparent;

      &::placeholder {
        color: white;
      }
    }
    > button {
      height: 40px;
      padding: 0 1rem;
      color: white;
      background: #63cdda;
      border-radius: 0 0.5rem 0.5rem 0;
      border: 0;
      cursor: pointer;

      transition: filter 0.2s ease;

      &:hover {
        filter: brightness(0.9);
      }
    }
  }
`;

export const PhotoContainer = styled.div`
  margin-top: 2rem;
  height: 300px;
  position: relative;

  .photo-shadow {
    background: #60a3bc;
    width: 100%;
    height: 100%;
  }

  img {
    width: 100%;
    height: 100%;

    object-fit: cover;

    position: absolute;
    top: 0;
    left: 0;
  }
  @media (min-width: 720px) {
    & {
      margin-top: 0;
      flex: 1;
    }
  }
`;
