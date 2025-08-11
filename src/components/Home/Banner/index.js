import React from 'react';
import './styles.css';
import bannerImg from './banner.jpg';
import Logo from '../../common/Logo';

const Banner = ({ handleScrollMenu }) => (
  <header>
    <div className='header-content'>
      <Logo />
      <div className='sticky-box'>
        <span className='attribute'>Dwarka Sec-8,9,10</span>
        <span className='attribute'>RajNagar-Part1&2</span>
        <span className='attribute'>Mahavir Encl.</span>
        <span className='attribute'>Dwarka Sec-1 and 2</span>
        <span className='attribute'>More...</span>
        
      </div>
      <div className='content-main'>
        {/* <h1>Delicious food for your cravings</h1>
        <p>We made fresh and healthy meals with different recipes</p> */}
        <h1>Your Family's Dream Home</h1>
        <h3><p>Limited-Time Offer: [Discount], Special Offers on Select Properties.</p></h3>
        <div>Don't Miss Out: Exclusive Deals.</div>
        <button onClick={handleScrollMenu}>
          View Menu <i className='fas fa-long-arrow-alt-right'></i>
        </button>
      </div>
    </div>
    <img className='header-img' src={bannerImg} alt='banner' />
  </header>
);

export default Banner;
