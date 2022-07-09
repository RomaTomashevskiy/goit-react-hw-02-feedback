import PropTypes from 'prop-types';
import css from './Statistics.module.css';

function Statistics({ good, neutral, bad, total, positivePercentage }) { 
    return <ul className={css.list}>

        <li className={css.item}>
            Good:
            <p className={css.item_text}>{good}</p>
        </li>
      

        <li className={css.item}>
            Neutral:
            <p className={css.item_text}> {neutral}</p>
        </li>

        <li className={css.item}>
            Bad:
            <p className={css.item_text}> {bad}</p>
        </li>

        <li className={css.item}>
            Total:
            <p className={css.item_text}> {total}</p>
        </li>
    
        <li className={css.item}>
            Positive feedback:
            <p className={css.item_text}>{positivePercentage}%</p>
        </li> 

    </ul>
};


Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}

export default Statistics;