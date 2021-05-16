import { Container, Main, Section } from "./styles";
import { Header } from "../../components/Header";

const SectionText = () => {
  return (
    <Section>
      <header>
        <h1>Feel luxurious, with{"\n"}OLuxury</h1>
      </header>

      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident
        excepturi quod voluptatum! Dolore, voluptatum. At amet aspernatur
        numquam laboriosam modi suscipit, eligendi obcaecati, eos fuga
        perspiciatis officiis expedita officia quae. Lorem ipsum dolor sit amet
        consectetur, adipisicing elit. Provident excepturi quod voluptatum!
        Dolore, voluptatum. At amet aspernatur numquam laboriosam modi suscipit,
        eligendi obcaecati, eos fuga perspiciatis officiis expedita officia
        quae.
      </p>

      <div>
        <input type="email" placeholder="email" />
        <button type="button">Subscrible</button>
      </div>
    </Section>
  );
};

export function Dashboard() {
  return (
    <Container>
      <div className="wrapper">
        <Header />
        <Main>
          <SectionText />
        </Main>
      </div>
    </Container>
  );
}
