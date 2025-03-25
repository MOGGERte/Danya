import { HandHeart } from 'lucide-react';
import s from './styles.module.css';

export const Info = () => {
  return (
    <div className={s.container}>
      <img src="/placeholder.svg" />
      <div className={s.info}>
        <HandHeart />
        <h3 className={s.title}>title</h3>
        <p>infoText</p>
      </div>
    </div>
  );
};
