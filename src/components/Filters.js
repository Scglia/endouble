import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
            <div>
                <input type="text" value={filter} onChange={this.changeHandler} />
                <button type="button" onClick={this.clearFilters}>
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
