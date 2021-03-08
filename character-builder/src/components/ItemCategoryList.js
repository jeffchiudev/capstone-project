import React from 'react';
import ItemCategory from './ItemCategory';

const masterItemCategories = [
  {
    name: 'Weapons'
  },
  {
    name: 'Armor',
  },
  {
    name: 'Magic Items'
  }
]

function ItemCategoryList(){
  return (
    <React.Fragment>
      {masterItemCategories.map((category, index) =>
        <ItemCategory name = {category.name}/>
      )}
    </React.Fragment>
  );
}

export default ItemCategoryList;