import propTypes from 'prop-types';
import { FriendListItem } from './FriendListItem'
import css from '../css/Friends.module.css'

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
    friends: propTypes.shape.isRequired,
}