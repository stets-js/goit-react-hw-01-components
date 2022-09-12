import PropTypes from 'prop-types';
import css from '../Statistics/Statistics.module.css'

export function StatElem({label, percentage}) {
  return (<li className={css.item}>
    <span className="label">{label}</span>
    <span className="percentage">{percentage}%</span>
    </li> )
}

StatElem.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}