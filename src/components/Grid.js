import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Item from './Item';
import styles from './Grid.module.css';

class Grid extends Component {
    clickHandler = (id) => {
        const { handleClick } = this.props;
        return handleClick(id);
    };

    render() {
        const { list } = this.props;
        return (
            <div className={styles.grid}>
                {list.map(item => (
                    <Item onClick={this.clickHandler(item.id)} key={item.id} {...item} />
                ))}
            </div>
        );
    }
}

Grid.propTypes = { list: PropTypes.arrayOf(PropTypes.object).isRequired };

export default Grid;
