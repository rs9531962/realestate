import React, { forwardRef } from 'react';
import MenuItem from './MenuItem/index2';
import ItemType1 from './MenuItem/ItemType1';
import './styles.css';

const Menu2 = forwardRef(({ list }, ref) => (
    <main ref={ref}>
    <b>Fresh and Juicy Fruits</b>
    {list.map((item) => (
      <ItemType1 item={item} key={item.id} />
    ))}
  </main>
));

export default Menu2;
