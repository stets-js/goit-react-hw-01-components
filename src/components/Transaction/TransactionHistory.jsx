import PropTypes from 'prop-types';
import { Transaction } from './Transaction'
import css from '../Transaction/Transaction.module.css'

export function TransactionHistory({items}) {
    return (
      <table className={css.transaction__history}>
  <thead className={css.transaction__head}>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
                {items.map(item => <Transaction key={item.id}
                    type={item.type}
                amount={item.amount}
                currency={item.currency}
                />)}
    
  </tbody>
</table>
    )
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    })).isRequired,
}