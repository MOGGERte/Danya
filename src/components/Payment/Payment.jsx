import { ArrowRight, CreditCard } from 'lucide-react';
import s from './styles.module.css';

export const Payment = () => {
  const payment = {
    amount: 150,
    dueTime: '1.02.3',
    method: 'Card'
  };
  return (
    <div className={s.container}>
      <div className={s.title}>
        <p>Следующий платеж</p>
        <CreditCard />
      </div>
      <div className={s.details}>
        <div>
          <p>{payment.amount}₽</p>
          <p>Срок оплаты {payment.dueTime}</p>
        </div>
        <div>
          <p>{payment.method}</p>
        </div>
      </div>
      <button className={s.payButton}>
        <p>Оплатить</p>
        <ArrowRight />
      </button>
      <p className={s.info}>info </p>
    </div>
  );
};
