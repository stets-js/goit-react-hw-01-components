import propTypes from 'prop-types';
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
  items: propTypes.arrayOf(propTypes.shape({
      id: propTypes.string.isRequired,
    type: propTypes.string.isRequired,
    amount: propTypes.string.isRequired,
    currency: propTypes.string.isRequired,
    })).isRequired,
}