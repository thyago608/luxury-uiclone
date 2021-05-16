import { Container } from "./styles";

export function Header() {
  return (
    <Container>
      <h1>
        <span>O</span>
        luxury
      </h1>

      <nav>
        <ul>
          <li>
            <a href="#">My Plans</a>
          </li>
          <li>
            <a href="">Contact Us</a>
          </li>
        </ul>
      </nav>
    </Container>
  );
}
