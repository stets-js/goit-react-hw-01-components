import { Profile } from 'components/Profile'
import { Statistics } from 'components/Statistics';
import { FriendList } from 'components/FriendList';
import {TransactionHistory} from 'components/TransactionHistory'

import user from '../data/user'
import itemsData from '../data/data'
import friends from '../data/friends'
import transactions from '../data/transactions';


export function App(){
  return (
    <div className="container">
    <Profile avatar={user.avatar}
      username={user.username}
      tag={user.tag}
      stats={user.stats}
        location={user.location} />
      <div className="stats">
    <Statistics title="Upload stats"
        stats={itemsData} />
    <FriendList friends={friends} />
        <TransactionHistory items={transactions} />
        </div>
    </div>
      )
};
