import propTypes from 'prop-types';
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
    avatar: propTypes.string.isRequired,
    username: propTypes.string.isRequired,
    tag: propTypes.string.isRequired,
  stats: propTypes.shape({
    followers: propTypes.number.isRequired,
    views: propTypes.number.isRequired,
    likes: propTypes.number.isRequired,
    }).isRequired,
    location: propTypes.string.isRequired,
    
};