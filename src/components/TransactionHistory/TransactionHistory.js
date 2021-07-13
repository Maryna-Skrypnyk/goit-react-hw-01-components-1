import React from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

const TransactionBodyItem = ({ type, amount, currency }, i) => {
  const trClassName = i % 2 ? styles.secondary : styles.primary;
  return (
    <tr className={trClassName}>
      <td className={styles.data}>{type}</td>
      <td className={styles.data}>{amount}</td>
      <td className={styles.data}>{currency}</td>
    </tr>
  );
};

// const TransactionBody = ({ items }) => {
//   if (items.length === 0) return null;
//   return <tbody>{items.map(TransactionBodyItem)}</tbody>;
// };

const TransactionBody = ({ items }) => {
  if (items.length === 0) return null;
  return (
    <tbody>
      {items.map(item => (
        <TransactionBodyItem key={item.id} />
      ))}
    </tbody>
  );
};

const TransactionHistory = ({ items }) => (
  <table className={styles.table}>
    <thead>
      <tr className={styles.title}>
        <th className={styles.name}>Type</th>
        <th className={styles.name}>Amount</th>
        <th className={styles.name}>Currency</th>
      </tr>
    </thead>

    <TransactionBody items={items} />
  </table>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default TransactionHistory;
