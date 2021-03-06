import Profile from './components/Profile/Profile';
import user from './components/Profile/user.json';

import Statistics from './components/Statistics/Statistics';
import statisticalData from './components/Statistics/statistical-data.json';

import FriendList from './components/FriendList/FriendList';
import friends from './components/FriendList/friends.json';

import transactions from './components/Transactions/transactions.json';
import TransactionHistory from './components/Transactions/TransactionHistory';

function App() {
  return (
    <div>
      {/* =================  Task #1  =========================== */}
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      {/* =================  Task #2  =========================== */}
      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />

      {/* =================  Task #3  =========================== */}
      <FriendList friends={friends} />

      {/* =================  Task #4  =========================== */}
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
