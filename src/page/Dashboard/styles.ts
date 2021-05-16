import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;

  .wrapper {
    width: 100%;
    max-width: 1080px;

    padding: 1rem;
  }
`;

export const Main = styled.main`
  margin-top: 6rem;
`;

export const Section = styled.section`
  > header {
    h1 {
      font-size: 2.5rem;
      color: white;
    }
  }

  > p {
    margin: 1rem 0;
    font-size: 1rem;
    color: gray;
    line-height: 1.4rem;
  }
`;
