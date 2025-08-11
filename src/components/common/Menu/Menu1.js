import React, { forwardRef } from 'react';
import MenuItem from './MenuItem/index2';
import ItemType1 from './MenuItem/ItemType1';
import './styles.css';

const Menu1 = forwardRef(({ list },name, ref , ) => (
 
    <main ref={ref}>
    <b>Green Leafy</b>
    {list.map((item) => (
      <ItemType1 item={item} key={item.id} />
    ))}
  </main>
));

export default Menu1;
