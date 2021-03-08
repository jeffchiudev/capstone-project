import React from 'react';
import ItemCategory from './ItemCategory';

function ItemCategoryList(){
  return (
    <React.Fragment>
      <ItemCategory 
        name = "Weapons" />
      <ItemCategory
        name = "Armor" />
    </React.Fragment>
  );
}

export default ItemCategoryList;