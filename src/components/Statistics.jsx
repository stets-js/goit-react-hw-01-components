import propTypes from 'prop-types';
import { StatElem } from './StatElem'
import css from '../css/Statistics.module.css'

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
    stats: propTypes.array.isRequired,
}
