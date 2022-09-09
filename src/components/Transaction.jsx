import propTypes from 'prop-types';
import css from '../css/Transaction.module.css'

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
    type: propTypes.string.isRequired,
    amount: propTypes.string.isRequired,
    currency: propTypes.string.isRequired
}