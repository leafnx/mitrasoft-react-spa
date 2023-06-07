import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet, ScrollRestoration } from 'react-router-dom';

import { getAboutFetch } from './features/about/aboutSlice';
import AppHeader from './components/AppHeader';
import './App.css';

export default function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAboutFetch())
  }, [])

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
