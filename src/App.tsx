import Page from './components/Page';
import Header from './components/Header';
import Logo from './components/Logo';
import Menu from './components/Menu';
import MenuItem from './components/MenuItem';
import FirstSection from './components/FirstSection';
import Jumbotron from './components/Jumbotron';

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
          <Jumbotron
            date="april 9-11, 2021"
            title="orel design conference"
          />
        </FirstSection>
      </Page>
    </div>
  );
}

export default App;
