import s from './styles.module.css';
import { StarIcon, ArrowDown, ArrowUp } from 'lucide-react';
import { getUserPlan } from '../../../api/user/plan/request.js';

export const Plan = () => {
  const plan = {
    uploadSpeed: 500,
    downloadSpeed: 500,
    usedGb: 112.2,
    maxGb: 230,
    type: 'free'
  };

  return (
    <div className={s.container}>
      <div className={s.title}>
        <p>План</p>
        <StarIcon />
      </div>
      <div>
        <div className={s.details}>
          <div>
            <p>{plan.usedGb} ГБ использовано</p>
          </div>
          <div>
            <p>{plan.maxGb - plan.usedGb} ГБ осталось</p>
          </div>
        </div>
        <div>
          <progress value={plan.usedGb} max={plan.maxGb} />
        </div>
        <p className={s.usedInfo}>
          Использовано {((plan.usedGb / plan.maxGb) * 100).toFixed(1)}% от вашего тарифного плана
        </p>
      </div>
      <div className={s.speed}>
        <div className={s.speedBlock}>
          <div className={s.speedTitle}>
            <ArrowUp />
            Загрузка
          </div>
          <div>
            <span className={s.speedAmount}>{plan.uploadSpeed}</span>{' '}
            <span className={s.accent}>mbps</span>
          </div>
        </div>
        <div className={s.speedBlock}>
          <div className={s.speedTitle}>
            <ArrowDown />
            Скачивание
          </div>

          <div>
            <span className={s.speedAmount}>{plan.downloadSpeed}</span>{' '}
            <span className={s.accent}>mbps</span>
          </div>
        </div>
      </div>
    </div>
  );
};
