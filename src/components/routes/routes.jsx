import { Route, Routes } from 'react-router';
import { Notifications } from './components/Notifications';
import { Servers } from './components/Servers';
import { Dashboard } from './components/Dashboard';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/notifications" element={<Notifications />} />
      <Route path="/servers" element={<Servers />} />
    </Routes>
  );
};
