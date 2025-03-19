import { HandHeart } from 'lucide-react';
import s from './styles.module.css';

export const Info = () => {
  return (
    <div className={s.container}>
      <img src="/placeholder.svg" />
      <div className={s.info}>
        <HandHeart className={s.icon} />
        <h3 className={s.title}>header</h3>
        <p>info textinfo textinfo textinfo textinfo textinfo textinfo textinfo textinfo text</p>
      </div>
    </div>
  );
};
