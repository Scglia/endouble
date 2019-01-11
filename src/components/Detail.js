import React from 'react';
import PropTypes from 'prop-types';

const Detail = ({ recipe, hide }) => <div onClick={hide}>Detail</div>;

Detail.propTypes = {
    recipe: PropTypes.object.isRequired,
    hide: PropTypes.func.isRequired,
};

export default Detail;
