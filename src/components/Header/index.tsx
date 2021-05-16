import { Container } from "./styles";

export function Header() {
  return (
    <Container>
      <h1 className="logo">
        <span>O</span>
        luxury
      </h1>

      <nav className="navigation">
        <ul>
          <li>
            <a href="#">My Plans</a>
          </li>
          <li>
            <a href="">Contact Us</a>
          </li>
        </ul>
      </nav>

      <button className="button-sign-in">Sign In</button>
    </Container>
  );
}
