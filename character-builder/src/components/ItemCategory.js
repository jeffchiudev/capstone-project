import React from 'react';
import Item from './Item';
import PropTypes from 'prop-types';

function ItemCategory(props){
  return (
    <React.Fragment>
      <h3>{props.name}</h3>
    </React.Fragment>
  );
}

ItemCategory.propTypes = {
  name: PropTypes.string,
};

export default ItemCategory;