import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';
import styles from './Grid.module.css';

const Grid = ({ list, handleClick }) => (
    <div className={styles.grid}>
        {list.map(item => (
            <Item handleClick={handleClick} key={item.id} {...item} />
        ))}
    </div>
);

Grid.propTypes = {
    list: PropTypes.arrayOf(PropTypes.object).isRequired,
    handleClick: PropTypes.func.isRequired,
};

export default Grid;
