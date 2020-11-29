import PropTypes, { arrayOf } from 'prop-types';
import randomColor from './randomColor';
import s from './Statistics.module.css';

function Statistics(props) {
  const { stats, title } = props;

  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>Upload stats</h2>}{' '}
      {/* не обязательный props и тег*/}
      <ul className={s.statList}>
        {stats.map(stat => (
          <li
            key={stat.id}
            className={s.item}
            style={{ backgroundColor: randomColor() }}
          >
            <span className={s.label}>{stat.label}</span>
            <span className={s.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

export default Statistics;
