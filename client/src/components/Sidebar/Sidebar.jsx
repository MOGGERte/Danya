import { NavLink } from 'react-router';
import s from './styles.module.css';
import { getUser } from '../../../api/user/request';
import { useEffect, useState } from 'react';
import { LayoutPanelLeft, Database, Rss } from 'lucide-react';
export const Sidebar = () => {
  const [profile, setProfile] = useState(null);
  const id = 1;
  useEffect(() => {
    const getData = async () => {
      const user = await getUser(id);
      setProfile(user);
    };
    getData();
  }, [id]);
  console.log(profile);
  return (
    <nav className={s.container}>
      <nav className={s.sidebar}>
        <nav className={s.list}>
          <NavLink
            className={({ isActive }) => (isActive ? `${s.link} ${s.active}` : s.link)}
            to="/dashboard"
          >
            <LayoutPanelLeft className={s.icon} />
            <p>Главная</p>
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? `${s.link} ${s.active}` : s.link)}
            to="/servers"
          >
            <Database className={s.icon} />
            Сервера
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? `${s.link} ${s.active}` : s.link)}
            to="/notifications"
          >
            <Rss className={s.icon} />
            Уведомления
          </NavLink>
        </nav>
        <nav className={s.user}>
          {profile ? <p>{profile.nickname}</p> : <p>loading</p>}
          {profile ? <p className={s.plan}>{profile.plan}</p> : <p>loading</p>}
        </nav>
      </nav>
    </nav>
  );
};
