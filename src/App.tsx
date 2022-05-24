import React from 'react';
import LandingPage from './components/LandingPage/LandingPage';
import ImagesLoaderComp from './components/PreLoadComp/PreLoadComp';
import Header from './components/Header/Header';
import SideMenu from './components/SideMenu/SideMenu';
import { Pages } from './store/core/core.interface';
import { Redirect, Route, Switch } from 'react-router-dom';
import './style/common.scss';
import './App.scss';

const Routes: React.FC = () => {
  return (
    <>
      <Switch>
        <Route path={Pages.Homepage} component={LandingPage} exact />
        <Route path={Pages.Signup} component={LandingPage} exact />
        <Route path={Pages.LandingPage} component={LandingPage} exact />
        <Redirect to={Pages.NotFound} />
      </Switch>
    </>
  );
};

function App() {
  return (
    <div className="App">
      <ImagesLoaderComp />
      <Header />
      <SideMenu />
      <Routes />
      {/* {isLoading && (
          <CircularProgress
            size={70}
            sx={{
              color: 'green',
              position: 'absolute',
              top: '38%',
              left: '38%',
            }}
          />
        )} */}
    </div>
  );
}

export default App;
