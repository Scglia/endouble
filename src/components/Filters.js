import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Filters.module.css';

class Filters extends Component {
    clearFilters = () => {
        const { handleChange } = this.props;
        handleChange('');
    };

    changeHandler = (event) => {
        const { handleChange } = this.props;
        handleChange(event.target.value);
    };

    render() {
        const { filter } = this.props;

        return (
            <div className={styles.container}>
                <input
                    placeholder="Filter"
                    className={`${styles.input} input`}
                    type="text"
                    value={filter}
                    onChange={this.changeHandler}
                />
                <button className={`${styles.button} button`} type="button" onClick={this.clearFilters}>
                    Clear
                </button>
            </div>
        );
    }
}

Filters.defaultProps = {
    filter: '',
};

Filters.propTypes = {
    filter: PropTypes.string,
    handleChange: PropTypes.func.isRequired,
};

export default Filters;
