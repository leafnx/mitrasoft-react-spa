import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import './App.css';

export default function App() {
  return (
    <div className='App'>
      <ScrollRestoration />
      <Outlet />
    </div>
  );
}
