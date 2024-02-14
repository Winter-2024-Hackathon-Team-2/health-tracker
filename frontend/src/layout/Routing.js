import React from 'react'
import {Routes, Route} from "react-router-dom";
import NotFound from './NotFound'
import HomePage from '../home/HomePage';
import Header from './Header';
import NavBar from './NavBar';

function Routing() {
  return (<>
    <Header />
    <NavBar />
    <Routes>
        <Route path="/" element = {<HomePage />} />
        <Route element = {<NotFound />} />           
    </Routes>
  </>)
}

export default Routing