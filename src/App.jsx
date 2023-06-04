import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import './App.css';
import AppHeader from './components/AppHeader';

export default function App() {
  return (
    <>
      <AppHeader />
      <div className='App'>
        <ScrollRestoration />
        <Outlet />
      </div>
    </>
  );
}
