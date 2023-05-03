import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import StatisticItem from './StatisticItem';

function Statistics({ title, stats }) {
  return (
    <section className={css.statistics}>
      {title &&<h2 className={css.title}>{title}</h2>}
      <ul className={css.statList}>
        {stats.map(el => (
          <StatisticItem
            key={el.id}
            label={el.label}
            percentage={el.percentage}
          />
        ))}
      </ul>
    </section>
  );
}

Statistics.prototype = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default Statistics;
