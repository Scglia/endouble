import React from 'react';
import PropTypes from 'prop-types';
import styles from './Item.module.css';

/* eslint-disable react/jsx-one-expression-per-line */
const Item = ({ label, image, id, handleClick, source }) => (
    <button type="button" className={styles.item} onClick={() => handleClick(id)}>
        <div className={styles.image} alt={label} style={{ backgroundImage: `url(${image})` }} />
        <div className={styles.content}>
            <div className={styles.title}>{label}</div>
            <div className={styles.from}>From {source}</div>
        </div>
    </button>
);

Item.propTypes = {
    label: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired,
    source: PropTypes.string.isRequired,
};

export default Item;
