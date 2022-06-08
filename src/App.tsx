import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import ImagesLoaderComp from './components/PreLoadComp/PreLoadComp';
import Header from './components/Header/Header';
import SideMenu from './components/SideMenu/SideMenu';
import { Pages } from './store/core/core.interface';
import SignUpPage from './components/SignUpPage/SignUpPage';
import Homepage from './components/Homepage/Homepage';
import { useSelector } from 'react-redux';
import { coreSelector } from './store/core/core.selectors';
import classNames from 'classnames';
import AppLoader from './components/AppLoader/AppLoader';
import './style/common.scss';
import './App.scss';


const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path={Pages.Homepage} component={Homepage} />
      <Route path={Pages.Signup} component={SignUpPage} />
      <Route path={Pages.LandingPage} component={LandingPage} />
      <Redirect to={Pages.Homepage} />
    </Switch>
  );
};

function App() {

  const isLoading = useSelector(coreSelector.isAppLoadingSelector);
  return (
    <>
      <div className={classNames("App", isLoading && "disabled")}>
        <ImagesLoaderComp />
        <Header />
        <SideMenu />
        <Routes />
      </div>
      {isLoading && (
        <AppLoader />
      )}
    </>
  );
}

export default App;
