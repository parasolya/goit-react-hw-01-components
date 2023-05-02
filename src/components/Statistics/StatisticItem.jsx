import PropTypes from 'prop-types';
import css from './StatisticItem.module.css';

function StatisticItem({ label, percentage }) {
  return (
    <li className={css.item}>
      <span>{label}</span>
      <span>{percentage}</span>
    </li>
  );
}

StatisticItem.prototype = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default StatisticItem;
