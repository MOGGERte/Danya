import { Database, Rss, Bolt, CircleHelp, CircleDollarSign } from 'lucide-react';
import { NavLink } from 'react-router';
import s from './styles.module.css';

export const Sidebar = ({ setCurrentPage }) => {
  const user = {
    username: 'user',
    email: 'user@ex.com',
    plan: 'free'
  };
  return (
    <nav className={s.container}>
      <nav className={s.sidebar}>
        <nav className={s.user}>User</nav>
        <nav className={s.list}>
          <NavLink
            className={({ isActive }) => (isActive ? `${s.link} ${s.active}` : s.link)}
            to="/dashboard"
          >
            Главная
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? `${s.link} ${s.active}` : s.link)}
            to="/servers"
          >
            Сервера
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? `${s.link} ${s.active}` : s.link)}
            to="/notifications"
          >
            Уведомления
          </NavLink>
        </nav>
      </nav>
    </nav>
  );
};
