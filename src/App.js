import logo from './logo.svg';
// import './App.css';
import  React, { useState } from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import {AppContext} from './context/Contextapi';
import SearchReault from './Components/SearchReault';
import VideoCard from './Components/VideoCard';
import Home from './Components/Home';
import Header from './Components/Header';
import VideoDetails from './Components/VideoDetails';

function App() {
  
  return (
    <AppContext>
      <BrowserRouter>
     
        <div className="flex flex-col h-full">
          <Header/>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/searchResult/:searchQuery' element={<SearchReault/>} />
            <Route path='/video/:id' element={<VideoDetails/>} />
          </Routes>
          YouTube App Creater</div>
      </BrowserRouter>
    </AppContext>
  );
}

export default App;
