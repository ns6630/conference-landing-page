import Page from "./components/Page";
import Header from "./components/Header";
import Logo from "./components/Logo";
import Menu from "./components/Menu";
import MenuItem from "./components/MenuItem";
import FirstSection from "./components/FirstSection";
import Jumbotron from "./components/Jumbotron";
import PageSection from "./components/PageSection";
import SpeakersLeft from "./components/SpeakersLeft";
import SpeakersRight from "./components/SpeakersRight";
import Headline from "./components/Headline";
import Paragraph from "./components/Paragraph";
import Cards from "./components/Cards";
import Card from "./components/Card";
import photo1 from "./static/img/people/1.jpg";
import photo2 from "./static/img/people/2.jpg";
import photo3 from "./static/img/people/3.jpg";
import photo4 from "./static/img/people/4.jpg";
import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <Page>
        <Header>
          <Logo />
          <Menu>
            <MenuItem>speakers</MenuItem>
            <MenuItem>schedule</MenuItem>
            <MenuItem>registration</MenuItem>
          </Menu>
        </Header>

        <FirstSection>
          <Jumbotron date="april 9-11, 2021" title="orel design conference" />
        </FirstSection>

        <PageSection>
          <SpeakersLeft>
            <Headline>speakers</Headline>
            <Paragraph>
              Phasellus vestibulum mollis sollicitudin. Nullam ac urna vel
              libero venenatis interdum non sed dolor. Sed eget odio molestie,
              placerat ipsum a, tincidunt ligula. Suspendisse finibus convallis
              augue, vitae mollis justo porttitor ut. Nullam non leo in felis
              viverra tincidunt et id mi. Etiam maximus vel ante sed ultrices.
              In eu porttitor risus, in sollicitudin leo. Integer eget viverra
              lectus. Phasellus vel iaculis sem. Integer tempor enim urna, a
              tincidunt est auctor in. Donec nec nunc leo. Mauris nec tellus
              massa. Ut sit amet tellus sit amet quam bibendum laoreet. Maecenas
              quam purus, vestibulum ut orci sit amet, condimentum aliquet
              risus.
            </Paragraph>
          </SpeakersLeft>
          <SpeakersRight>
            <Cards>
              <Card photo={photo1} name="John Watson" position="UX Designer" />
              <Card photo={photo2} name="Kate Brooks" position="Art Director" />
              <Card
                photo={photo3}
                name="Adrianne Cooper"
                position="Head of Product Design"
              />
              <Card
                photo={photo4}
                name="Clark Cook"
                position="Senior Interaction Designer"
              />
              <Button>see more</Button>
            </Cards>
          </SpeakersRight>
        </PageSection>
      </Page>
    </div>
  );
}

export default App;
