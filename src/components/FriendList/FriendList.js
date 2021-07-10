import React from 'react';
import FriendListItem from './FriendListItem';
import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

const FriendList = ({ friends }) => {
  if (friends.length === 0) return null;
  return <ul className={styles.friends}>{friends.map(FriendListItem)}</ul>;
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};

export default FriendList;
