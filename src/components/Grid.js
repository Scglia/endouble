import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

const Grid = ({ list }) => (
    <div>
        {list.map(item => (
            <Item {...item} />
        ))}
    </div>
);

Grid.propTypes = { list: PropTypes.arrayOf(PropTypes.object).isRequired };

export default Grid;
