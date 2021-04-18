import React from "react";
import Page from "./components/Page";
import Header from "./components/Header";
import Logo from "./components/Logo";
import Menu from "./components/Menu";
import MenuItem from "./components/MenuItem";
import FirstSection from "./components/FirstSection";
import Jumbotron from "./components/Jumbotron";
import PageSection from "./components/PageSection";
import BorderTopWrapper from "./components/BorderTopWrapper";
import SpeakersRight from "./components/SpeakersRight";
import Headline from "./components/Headline";
import Paragraph from "./components/Paragraph";
import Cards from "./components/Cards";
import Card from "./components/Card";
import photo1 from "./static/img/people/1.jpg";
import photo2 from "./static/img/people/2.jpg";
import photo3 from "./static/img/people/3.jpg";
import photo4 from "./static/img/people/4.jpg";
import conf1 from "./static/img/conference1.jpg";
import conf2 from "./static/img/conference2.jpg";
import Button from "./components/Button";
import ScheduleWrapper from "./components/ScheduleWrapper";
import Tabs from "./components/Tabs";
import Tab from "./components/Tab";
import Schedule from "./components/Schedule";
import ConferenceImg from "./components/ConferenceImg";
import RegistrationRight from "./components/RegistrationRight";
import Footer from "./components/Footer";
import Composition from "./components/Composition";

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
          <Composition />
        </FirstSection>

        <PageSection>
          <BorderTopWrapper>
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
          </BorderTopWrapper>
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

        <PageSection style={{gridTemplateColumns: "1fr"}}>
          <ScheduleWrapper>
            <Tabs>
              <Tab 
                index={0}
                title={"day 1"}
              >
                <Schedule
                  time={"10 am - 11 am"}
                  title={"Registration & Technical Discussions"}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer commodo efficitur neque, nec interdum massa ornare non.
                </Schedule>
                <Schedule
                  time={"11 am - 12 am"}
                  title={"Introduction to KDC"}
                >
                  Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam ac quam scelerisque, tempus diam a, tincidunt libero.
                </Schedule>
                <Schedule
                  time={"12 am - 1 pm"}
                  title={"Panel Discussion: AI in Product Design"}
                >
                  Maecenas vitae dolor in felis dapibus tristique. Nullam congue erat sit amet lorem euismod, id congue tellus dapibus.
                </Schedule>
                <Schedule
                  time={"1 pm - 2 pm"}
                  title={"Lunch Break"}
                >
                  Vestibulum sollicitudin, lacus vitae consectetur blandit, libero mauris elementum ligula, sed maximus elit risus at enim. Nullam vitae tincidunt libero, at vulputate quam.
                </Schedule>
                <Schedule
                  time={"2 pm - 6 pm"}
                  title={"Talks from John whatson"}
                >
                  Nam dignissim orci vel diam lobortis ullamcorper. Pellentesque nec orci urna.
                </Schedule>
              </Tab>
              <Tab 
                index={1}
                title={"day 2"}
              >
                Content 1
              </Tab>
              <Tab 
                index={2}
                title={"day 3"}
              >
                Content 2
              </Tab>
            </Tabs>
            <section>
              <Headline>schedule</Headline>
              <Paragraph>
              Vivamus quis nisl sit amet neque ultrices pharetra ac id diam. Cras euismod nec quam scelerisque facilisis. Curabitur nec massa eget libero tristique elementum nec quis nisi. Maecenas eu enim bibendum, maximus velit vel, ullamcorper turpis. Sed lacus erat, tincidunt et tellus sit amet, gravida venenatis quam. Aliquam pretium vehicula diam, laoreet gravida tortor porttitor et. Suspendisse vitae massa turpis.
              </Paragraph>
            </section>
          </ScheduleWrapper>
        </PageSection>

        <PageSection>
          <BorderTopWrapper>
            <Headline>registration</Headline>
            <Paragraph>
              Mauris a mattis augue, ut tempor diam. Nullam vitae lorem maximus, porta purus ac, imperdiet felis. Maecenas tincidunt euismod odio, nec pulvinar nisi imperdiet a. Proin maximus pharetra placerat. Nunc massa ante, efficitur eget sapien vel, tempor mollis quam. Praesent finibus sagittis lorem id viverra. Ut mattis eros a purus mattis, sit amet ullamcorper odio condimentum. Fusce accumsan vitae leo tristique rhoncus. Nullam iaculis mi nec nulla venenatis varius. Mauris ut laoreet lacus. 
            </Paragraph>
            <Button style={{marginTop: "40px"}}>register now</Button>
          </BorderTopWrapper>
          <RegistrationRight>
            <ConferenceImg src={conf1}/>
            <ConferenceImg src={conf2}/>
            <img src="/src/static/img/conference2.jpg" alt=""/>
          </RegistrationRight>
        </PageSection>

        <Footer>
          Orel Design Conference &copy; 2021. All Rights Reserved.
        </Footer>
      </Page>
    </div>
  );
}

export default App;
