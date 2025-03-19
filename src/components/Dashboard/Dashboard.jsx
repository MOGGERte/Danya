import { Info } from '../Info';
import { Payment } from '../Payment';
import { Plan } from '../Plan';
import s from './styles.module.css';

export const Dashboard = () => {
  return (
    <div className={s.container}>
      <Info />
      <Plan />
      <Payment />
    </div>
  );
};
