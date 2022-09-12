import propTypes from 'prop-types';
import { StatElem } from '../Statistics/StatElem'
import css from '../Statistics/Statistics.module.css'

export function Statistics({title, stats}) {
    return (
        <section className={css.statistics}>
            {title && <h2 className={css.title}>{title}</h2>}
            <ul className={css.stat__list}>
                {stats.map(elem => <StatElem key={elem.id}
                    label={elem.label}
                    percentage={elem.percentage} />)}    
          </ul>
        </section>
    )
}

Statistics.propTypes = {
    title: propTypes.string.isRequired,
    stats: propTypes.arrayOf(propTypes.shape({
        id: propTypes.string.isRequired,
        label: propTypes.string.isRequired,
        percentage: propTypes.number.isRequired,
    })).isRequired,
}
