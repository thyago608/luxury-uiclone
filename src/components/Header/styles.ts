import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: flex-end;

  .logo {
    color: #00d8d6;
    font-weight: 300;
    font-size: 2rem;
    margin-right: 3rem;
    align-self: flex-start;
    cursor: pointer;

    > span {
      font-weight: bold;
    }
  }

  .navigation {
    ul {
      display: flex;
      a {
        display: block;
        font-size: 1.2rem;
        font-weight: 300;
        color: white;
        padding: 1rem;
        margin: 0 4px;
        transition: background 0.2s ease;

        &:hover {
          background: white;
          color: black;
        }
      }
    }
  }
  .button-sign-in {
    border: 1px solid white;
    border-radius: 0.6rem;
    background: #485460;
    color: white;

    padding: 0 1rem;
    height: 35px;

    margin-left: auto;

    cursor: pointer;

    transition: background 0.2s ease;

    &:hover {
      background: white;
      color: black;
    }
  }
`;
