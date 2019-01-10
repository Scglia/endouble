import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';
import styles from './Grid.module.css';

const Grid = ({ list }) => (
    <div className={styles.grid}>
        {list.map(item => (
            <Item {...item} />
        ))}
    </div>
);

Grid.propTypes = { list: PropTypes.arrayOf(PropTypes.object).isRequired };

export default Grid;
