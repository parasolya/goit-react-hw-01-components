import PropTypes from 'prop-types';
import Profile from './Profile/Profile';
import user from '../user.json';
import Statistics from './Statistics/Statistics';
import data from '../data.json';
import FriendList from './FriendList/FriendList';
import friends from '../friends.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from '../transactions.json';
import css from './App.module.css';

export const App = () => {
  return (
    <div className={css.box}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />

      <section className={css.statistics}>
        <h2 className={css.title}>{data.title ? 'Upload stats' : ''}</h2>
        <ul className={css.statList}>
          {data.map(el => (
            <Statistics
              key={el.id}
              label={el.label}
              percentage={el.percentage}
            />
          ))}
        </ul>
      </section>

      <FriendList items={friends} />

      <div>
        <table className={css.tableTransactionsHistory}>
          <thead>
            <tr className={css.tableTransactions}>
              <th>Type</th>
              <th>Amount</th>
              <th>Currency</th>
            </tr>
          </thead>

          <tbody>
            {transactions.map(item => (
              <TransactionHistory
                id={item.id}
                type={item.type}
                amount={item.amount}
                currency={item.currency}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
App.prototype = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
    })
  ),
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
  title: PropTypes.string,
};
