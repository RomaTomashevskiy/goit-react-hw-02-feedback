import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css'

function FeedbackOptions({ options, onLeaveFeedback }) {
    return <div className={css.box_btn}>
        {options.map(option => (
            <button className={css.button} type="button" key={option} onClick={() =>
                onLeaveFeedback(option)}>{option}</button>
        ))}
    </div>
}


FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired),
    onLeaveFeedback: PropTypes.func.isRequired,
};


export default FeedbackOptions;