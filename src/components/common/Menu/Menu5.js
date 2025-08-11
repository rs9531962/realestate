import React, { forwardRef } from 'react';
import MenuItem from './MenuItem/index2';
import ItemType3 from './MenuItem/ItemType3';
import './styles.css';

const Menu5 = forwardRef(({ list }, ref) => (
    <main ref={ref}>
    <b>RealEstate </b>
    {list.map((item) => (
      <ItemType3 item={item} key={item.Product_Id} />
    ))}
  </main>
));

export default Menu5;
