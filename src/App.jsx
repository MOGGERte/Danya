import { Dashboard } from './components/Dashboard';
import s from './styles.module.css';
import { Notifications } from './components/Notifications';
import { Sidebar } from './components/Sidebar';
import { Servers } from './components/Servers';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';

export const App = () => {
  return (
    <BrowserRouter>
      <div className={s.container}>
        <Sidebar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/servers" element={<Servers />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
