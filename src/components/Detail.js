import React from 'react';
import PropTypes from 'prop-types';
import styles from './Detail.module.css';

const Detail = ({ recipe, hide }) => (
    <div className={styles.container}>
        <div className={styles.detail}>
            <div className={`${styles.image} ${styles.element}`} style={{ backgroundImage: `url(${recipe.image})` }} />
            <div className={`${styles.title} ${styles.element}`}>{recipe.label}</div>
            <ul className={`${styles.ingredients} ${styles.element}`}>
                {recipe.ingredientLines.map(line => (
                    <li key={line}>{line}</li>
                ))}
            </ul>
            <a href={recipe.url} className={`${styles.button} ${styles.element} ${styles.link} button`}>
                See full recipe
            </a>
            <button type="button" className={`${styles.button} ${styles.element} button`} onClick={hide}>
                Close
            </button>
        </div>
    </div>
);

Detail.propTypes = {
    recipe: PropTypes.shape({
        image: PropTypes.string,
        label: PropTypes.string,
        ingredientLines: PropTypes.arrayOf(PropTypes.string),
        url: PropTypes.string,
    }).isRequired,
    hide: PropTypes.func.isRequired,
};

export default Detail;
