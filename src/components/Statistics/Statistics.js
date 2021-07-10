import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const color = () => {
  const r = Math.round(Math.random() * 255);
  const g = Math.round(Math.random() * 255);
  const b = Math.round(Math.random() * 255);
  const bgColor = `rgb(${r}, ${g}, ${b})`;
  return bgColor;
};

const StatsListItem = ({ id, label, percentage }) => {
  return (
    <li className={styles.item} key={id} style={{ backgroundColor: color() }}>
      <span className={styles.label}>{label}</span>
      <span className={styles.percentage}> {percentage}%</span>
    </li>
  );
};

const StatsList = ({ stats }) => {
  if (stats.length === 0) return null;
  return <ul className={styles.statList}>{stats.map(StatsListItem)}</ul>;
};

const Statistics = ({ title, stats }) => (
  <section className={styles.statistics}>
    {title && <h2 className={styles.title}>{title}</h2>}

    <StatsList stats={stats} />

    {/* <ul className={styles.statList}>
      {stats.map(({ id, label, percentage }) => (
        <li
          className={styles.item}
          key={id}
          style={{ backgroundColor: color() }}
        >
          <span className={styles.label}>{label}</span>
          <span className={styles.percentage}> {percentage}%</span>
        </li>
      ))}
    </ul> */}
  </section>
);

Statistics.defaultProps = {
  title: '',
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Statistics;
