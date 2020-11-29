import Profile from './components/Profile/Profile';
import user from './components/Profile/user.json';

import Statistics from './components/Statistics/Statistics';
import statisticalData from './components/Statistics/statistical-data.json';
import { directive } from '@babel/types';

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

      {/* =================  Task #4  =========================== */}
    </div>
  );
}

export default App;
