import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from './images/default.jpg';
import './Profile.css';

const Profile = ({ avatar, name, tag, location, stats }) => (
  <div className="Profile">
    <div className="Profile__container">
      <div className="Profile__description">
        <img
          src={avatar}
          alt="Аватар пользователя"
          width="512"
          height="512"
          className="Profile__avatar"
        />
        <p className="Profile__name">{name}</p>
        <p className="Profile__tag">@{tag}</p>
        <p className="Profile__location">{location}</p>
      </div>

      <ul className="Profile__stats">
        <li className="Profile__item">
          <span className="Profile__label">Followers</span>
          <span className="Profile__quantity"> {stats.followers}</span>
        </li>
        <li className="Profile__item">
          <span className="Profile__label">Views</span>
          <span className="Profile__quantity"> {stats.views}</span>
        </li>
        <li className="Profile__item">
          <span className="Profile__label">Likes</span>
          <span className="Profile__quantity"> {stats.likes}</span>
        </li>
      </ul>
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
