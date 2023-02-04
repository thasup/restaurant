import React from 'react';

import { SubHeading } from '../../components'
import { images } from '../../constants'
import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app_wrapper_info'>
      <SubHeading title='Chase the new Favor' />
      <h1 className='app__header-h1'>The Ket to Fine Dining</h1>
      <p className='p__opensans' style={{ margin: '2rem 0' }}>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
      <button type='button' className='custom__buttom'>Explore Menu</button>
    </div>

    <img src={images.welcome} alt='welcome img' className='app__header-img' />
  </div>
);

export default Header;
