import React from 'react';
import PropTypes from 'prop-types';
import styles from './Item.module.css';

const Item = ({ label, image }) => (
    <div className={styles.item}>
        <img alt={label} src={image} />
        {label}
    </div>
);

Item.propTypes = {
    label: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
};

export default Item;
