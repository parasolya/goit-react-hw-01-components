import PropTypes from 'prop-types';

function TransactionHistory({ type, amount, currency }) {
  return (
    <>
      <tr>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </tr>
    </>
  );
}

TransactionHistory.prototype = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
};

export default TransactionHistory;
