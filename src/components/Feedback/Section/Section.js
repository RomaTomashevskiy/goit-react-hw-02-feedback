import PropTypes from 'prop-types';
import css from './Section.module.css'


function Section({ title, children  }) {
    return <section className={css.section}>
        <h1 className={css.title}>{title}</h1>
        {children}
    </section>
};


Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
};

export default Section;