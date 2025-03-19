import s from './styles.module.css';
import { StarIcon, ArrowDown, ArrowUp } from 'lucide-react';

export const Plan = () => {
  const plan = {
    uploadSpeed: 500,
    downloadSpeed: 500,
    usedGb: 112,
    maxGb: 230,
    type: 'free'
  };

  return (
    <div className={s.container}>
      <div className={s.title}>
        <p>План</p>
        <StarIcon />
      </div>
      <div className={s.details}>
        <div>
          <p>{plan.usedGb} использовано</p>
        </div>
        <div>
          <p>{plan.maxGb} всег</p>
        </div>
      </div>
      <div className={s.speed}>
        <div className={s.speedBlock}>
          <div className={s.speedTitle}>
            <ArrowUp />
            Загрузка
          </div>
          <div className={s.speedAmount}>{plan.uploadSpeed} mbps</div>
        </div>
        <div className={s.speedBlock}>
          <div className={s.speedTitle}>
            <ArrowDown />
            Скачивание
          </div>
          <div className={s.speedAmount}>{plan.downloadSpeed} mbps</div>
        </div>
      </div>
    </div>
  );
};
