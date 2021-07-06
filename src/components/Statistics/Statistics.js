import React from 'react';
import PropTypes from 'prop-types';
import './Statistics.css';

const color = () => {
  const r = Math.round(Math.random() * 255);
  const g = Math.round(Math.random() * 255);
  const b = Math.round(Math.random() * 255);
  const bgColor = `rgb(${r}, ${g}, ${b})`;
  return bgColor;
};

const Statistics = ({ title, stats }) => (
  <section className="Statistics__statistics">
    <div className="Statistics__container">
      {title && <h2 className="Statistics__title">{title}</h2>}
      <ul className="Statistics__stat-list">
        {stats.map(({ id, label, percentage }) => (
          <li
            className="Statistics__item"
            key={id}
            style={{ backgroundColor: color() }}
          >
            <span className="Statistics__label">{label}</span>
            <span className="Statistics__percentage"> {percentage}%</span>
          </li>
        ))}
      </ul>
    </div>
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
