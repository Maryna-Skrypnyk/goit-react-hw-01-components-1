import React from 'react';
import Profile from './components/Profile/Profile';
import user from './json/user.json';
import Statistics from './components/Statistics/Statistics';
import statisticalData from './json/statistical-data.json';
import FriendList from './components/FriendList/FriendList';
import friends from './json/friends.json';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import transactions from './json/transactions.json';
// import Container from './components/Container/Container';

const App = () => {
  return (
    <div>
      <Profile
        avatar={user.avatar}
        name={user.name}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;
