import PropTypes from 'prop-types';
import css from '../FriendList/Friends.module.css'

export function FriendListItem({avatar, name, isOnline}) {
    return (
        <li class={css.item}>
            {isOnline ? <span className={css.online}></span> : <span className={css.offline}></span>}
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
        </li>
    )
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}