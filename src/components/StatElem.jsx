import propTypes from 'prop-types';
import css from '../css/Statistics.module.css'

export function StatElem({label, percentage}) {
  return (<li className={css.item}>
    <span className="label">{label}</span>
    <span className="percentage">{percentage}%</span>
    </li> )
}

StatElem.propTypes = {
    label: propTypes.string.isRequired,
    percentage: propTypes.number.isRequired,
}