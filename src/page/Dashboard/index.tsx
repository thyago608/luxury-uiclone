import { Container, Main, Section, PhotoContainer } from "./styles";
import { Header } from "../../components/Header";
import image from "../../assets/image.jpg";

const SectionText = () => {
  return (
    <Section>
      <header>
        <h1>
          Feel luxurious, with <span>Luxury</span>
        </h1>
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

      <div className="container-input-button">
        <input type="email" placeholder="your@email.com" />
        <button type="button">Subscrible</button>
      </div>
    </Section>
  );
};

const SectionPhoto = () => {
  return (
    <PhotoContainer>
      <div className="photo-shadow"></div>
      <img src={image} alt="" />
    </PhotoContainer>
  );
};

export function Dashboard() {
  return (
    <Container>
      <div className="wrapper">
        <Header />
        <Main>
          <SectionText />
          <SectionPhoto />
        </Main>
      </div>
    </Container>
  );
}
