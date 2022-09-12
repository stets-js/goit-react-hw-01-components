import PropTypes from 'prop-types';
import css from '../Profile/Profile.module.css'

export function Profile({ avatar, username, tag, stats, location }) {
return (
        <div className={css.profile}>
  <div className={css.description}>
    <img
      src={avatar}
      alt="User avatar"
      className={css.avatar}
    />
    <p className={css.name}>{username}</p>
    <p className={css.tag}>{tag}</p>
      <p className={css.location}>{location}</p>
  </div>

  <ul className={css.stats}>
    <li className={css.stats__item}>
      <span className="label">Followers</span>
      <span className="quantity">{stats.followers}</span>
    </li>
    <li className={css.stats__item}>
      <span className="label">Views</span>
      <span className="quantity">{stats.views}</span>
    </li>
    <li className={css.stats__item}>
      <span className="label">Likes</span>
      <span className="quantity">{stats.likes}</span>
    </li>
  </ul>
</div>
    )
}

Profile.propTypes = {
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
    }).isRequired,
    location: PropTypes.string.isRequired,
    
};