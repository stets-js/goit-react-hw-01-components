import PropTypes from 'prop-types';
import css from '../Transaction/Transaction.module.css'

export function Transaction({type, amount, currency}) {
    return (
        <tr className={css.transaction__item}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
        </tr>
    )
}

Transaction.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired
}