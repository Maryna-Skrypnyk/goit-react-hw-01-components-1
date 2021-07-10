import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from './images/default.jpg';
import styles from './FriendListItem.module.css';

const FriendListItem = ({ id, avatar, name, isOnline = false }) => (
  <li key={id} className={styles.item}>
    <span className={styles[isOnline]}></span>
    <img className={styles.avatar} src={avatar} alt={name} width="48" />
    <p className={styles.name}>{name}</p>
  </li>
);

FriendListItem.defaultProps = {
  avatar: defaultImage,
  isOnline: false,
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.oneOf([true, false]),
  // isOnline: PropTypes.bool,
  id: PropTypes.number.isRequired,
};

export default FriendListItem;
