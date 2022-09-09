import Profile from 'components/Profile'

import user from '../data/user'

export default function App(){
  return (
    <Profile avatar={user.avatar}
      username={user.username}
      tag={user.tag}
      likes={user.stats.likes}
      views={user.stats.views}
      followers={user.stats.followers}
      location={user.location} />
      );
};
