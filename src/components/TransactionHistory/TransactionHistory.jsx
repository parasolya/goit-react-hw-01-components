import PropTypes from 'prop-types';
import Transaction from './Transaction';
import css from './TransactionHistory.module.css';

function TransactionHistory({ items }) {
  return (
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
          {items.map(item => (
            <Transaction
              key={item.id}
              type={item.type}
              amount={item.amount}
              currency={item.currency}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

TransactionHistory.prototype = {
  key: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
};

export default TransactionHistory;
