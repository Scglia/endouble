import React from 'react';
import PropTypes from 'prop-types';
import styles from './Item.module.css';

const Item = ({ label, image, id, handleClick }) => (
    <button type="button" className={styles.item} onClick={() => handleClick(id)}>
        <img alt={label} src={image} />
        {label}
    </button>
);

Item.propTypes = {
    label: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired,
};

export default Item;
