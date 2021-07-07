import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from './images/default.jpg';
import styles from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline = false }) => (
  <>
    <span className={styles[isOnline]}></span>
    <img className={styles.avatar} src={avatar} alt={name} width="48" />
    <p className={styles.name}>{name}</p>
  </>
);

FriendListItem.defaultProps = {
  avatar: defaultImage,
  isOnline: false,
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.oneOf([true, false]),
  // isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
