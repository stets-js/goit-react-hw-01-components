import propTypes from 'prop-types';
import { FriendListItem } from '../FriendList/FriendListItem'
import css from '../FriendList/Friends.module.css'

export function FriendList({friends}) {
    return (
        <ul className={css.friend__list}>
            {friends.map(friend => <FriendListItem key={friend.id}
                avatar={friend.avatar}
                name={friend.name}
                isOnline={friend.isOnline} />)}
        </ul>
    )
}

FriendList.propTypes = {
    friends: propTypes.arrayOf(propTypes.shape({
    avatar: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    isOnline: propTypes.bool.isRequired,
    id: propTypes.number.isRequired,
    })).isRequired,
}