import propTypes from 'prop-types';
import { Transaction } from 'components/Transaction'
import css from '../css/Transaction.module.css'

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
    items: propTypes.array.isRequired,
}