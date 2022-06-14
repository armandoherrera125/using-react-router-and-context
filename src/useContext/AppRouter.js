import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomeScreen } from './HomeScreen';
import {LoginScreen } from './LoginScreen';
import {AboutScreen} from './AboutScreen';
import {MainApp} from './MainApp';
import { NavBar } from './NavBar';

export const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<NavBar />}>
            <Route exact path="/" element={<HomeScreen />} />
            <Route exact path="/login" element={<LoginScreen />} />
            <Route exact path="/about" element={<AboutScreen />} />
            <Route exact path="/main" element={<MainApp />} />
            </Route>    
        </Routes>
    </BrowserRouter>
  )
}
