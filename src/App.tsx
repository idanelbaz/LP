import React from 'react';
import { Navigate, Route, Routes } from "react-router-dom";
import LandingPage from './components/LandingPage/LandingPage';
import ImagesLoaderComp from './components/PreLoadComp/PreLoadComp';
import './style/common.scss';
import './App.scss';
import Header from './components/Header/Header';
import SideMenu from './components/SideMenu/SideMenu';


const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      {/* <Route path="users" element={<Team />} />
      <Route path="posts" element={<About />} /> */}
      <Route path="" element={<Navigate to="/" />} />
    </Routes>
  );
};

function App() {
  return (
    <div className="App">
      <ImagesLoaderComp />
      <Header />
      <SideMenu />
      <AppRoutes />
    </div>
  );
}

export default App;
