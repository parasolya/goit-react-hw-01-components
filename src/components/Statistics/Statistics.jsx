import PropTypes from 'prop-types';
import css from './Statistics.module.css';

function Statistics(props) {
  return (
    <li className={css.item}>
      <span className={css.label}>{props.label}</span>
      <span className={css.percentage}>{props.percentage}</span>
    </li>
  );
}

Statistics.prototype = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default Statistics;
