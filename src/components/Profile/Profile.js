import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from './images/default.jpg';
import styles from './Profile.module.css';

const Profile = ({ avatar, name, tag, location, stats }) => (
  <div className={styles.section}>
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.description}>
          <img
            src={avatar}
            alt="Аватар пользователя"
            width="512"
            height="512"
            className={styles.avatar}
          />
          <p className={styles.name}>{name}</p>
          <p className={styles.tag}>@{tag}</p>
          <p className={styles.location}>{location}</p>
        </div>

        <ul className={styles.stats}>
          <li className={styles.item}>
            <span className={styles.label}>Followers</span>
            <span className={styles.quantity}> {stats.followers}</span>
          </li>
          <li className={styles.item}>
            <span className={styles.label}>Views</span>
            <span className={styles.quantity}> {stats.views}</span>
          </li>
          <li className={styles.item}>
            <span className={styles.label}>Likes</span>
            <span className={styles.quantity}> {stats.likes}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

Profile.defaultProps = {
  avatar: defaultImage,
};

Profile.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
  // stats: PropTypes.objectOf(PropTypes.shape({
  //   followers: PropTypes.number.isRequired,
  //   views: PropTypes.number.isRequired,
  //   likes: PropTypes.number.isRequired,
  // })).isRequired,
};

export default Profile;