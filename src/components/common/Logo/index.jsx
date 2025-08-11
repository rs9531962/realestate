import React from 'react';
import logo from './logo.png';
import './styles.css';
import Search from '../../../components/common/Search';
import FixedAttributesBox from '../../../components/Home/Banner/FixedAttributesBox'; // Adjust the path as needed


const Logo = () => (
  <div className='header-content_logo'>
    <div>
      <img src={logo} alt='logo' />
      <span>
        <b>Real Estate Journey</b>
      </span>
    </div>
    <p>
      <b>Exquisite Real Estate</b>
    </p>
    {/* <Search/> */}
    {/* <FixedAttributesBox /> */}
  </div>
);

export default Logo;
