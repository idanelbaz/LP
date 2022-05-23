import React from 'react';
import LandingPage from './components/LandingPage/LandingPage';
import ImagesLoaderComp from './components/PreLoadComp/PreLoadComp';
import './style/common.scss';
import './App.scss';
import Header from './components/Header/Header';
import SideMenu from './components/SideMenu/SideMenu';
import { useSelector } from 'react-redux';
import { coreSelector } from './store/core/core.selectors';
import { Pages } from './store/core/core.interface';


const AppRoutes: React.FC = () => {
  const currentPage = useSelector(coreSelector.currentPageSelector)
  const renderPage = () => {
    switch(currentPage) {
      case Pages.LandingPage:
        return <LandingPage/>
      case Pages.Homepage:
        return <div>Homepage</div>  
      case Pages.Signup:
        return <div>Signup</div> 
      default: 
        return <LandingPage/>         
    }
  }
  return (
    renderPage()
  );
};

function App() {
  return (
    <div className="App">
      <ImagesLoaderComp />
      <Header />
      <SideMenu />
      <AppRoutes />
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
