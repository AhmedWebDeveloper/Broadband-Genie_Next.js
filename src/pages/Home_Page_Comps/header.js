import React, { useState } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

const Header = () => {
  const [changeToogle, setchangeToogle] = useState(false);

  const menuExpand = (value) => {
    if (window.innerWidth < 1024) {
      setchangeToogle(!changeToogle);
    }
    if (value === 'home') {
      window.scroll(0, 0);
      setchangeToogle(false);
    }
  };

  return (
    <>
      <div
        class={`header-after position-fixed w-100 h-100 ${
          changeToogle ? 'd-block' : 'd-none'
        } `}
        onClick={menuExpand}
      />

      <div className='header-background d-flex justify-content-center position-fixed w-100'>
        <section className='header-container'>
          <div className='header-section'>
            <div className='header-main  d-flex'>
              <header className='header '>
                <Link
                  to='/'
                  className='h-img-parent'
                  onClick={() => menuExpand('home')}
                >
                  <StaticImage
                    src='../../images/headerLogo.png'
                    className='h-img'
                    alt='img'
                    placeholder='blurred'
                  />
                </Link>
                <div className='h-right-side '>
                  <div className='h-nav-parent'>
                    <ul
                      className={`h-nav-main-ul  align-items-center  ${
                        changeToogle ? 'show-nav' : ''
                      } `}
                    >
                      <div className='h-nav-main-p-li' onClick={menuExpand}>
                        <li className='h-nav-main-li d-flex justify-content-center align-items-center my-2 my-sm-3'>
                          <a href='#home' className='header-menu-text w-100'>
                            <span>Home</span>
                          </a>
                        </li>
                      </div>
                      <div className='h-nav-main-p-li' onClick={menuExpand}>
                        <li className='h-nav-main-li d-flex justify-content-center align-items-center my-2 my-sm-3'>
                          <a
                            href='#broadBands'
                            className='header-menu-text w-100'
                          >
                            <span>BroadBands</span>
                          </a>
                        </li>
                      </div>
                      <div className='h-nav-main-p-li' onClick={menuExpand}>
                        <li className='h-nav-main-li d-flex justify-content-center align-items-center my-2 my-sm-3'>
                          <a href='#faqs' className='header-menu-text w-100'>
                            <span>FAQ's</span>
                          </a>
                        </li>
                      </div>
                      <div className='h-nav-main-p-li' onClick={menuExpand}>
                        <li className='h-nav-main-li d-flex justify-content-center align-items-center my-2 my-sm-3'>
                          <a href='#help' className='header-menu-text w-100'>
                            <span>Help & Advice</span>
                          </a>
                        </li>
                      </div>
                    </ul>
                  </div>

                  <div className='hotline-parent'>
                    <p className='hotline-title'>ORDER BY PHONE</p>
                    <p className='hotline-number'>0800 4661 043</p>
                    <div className='hotline-time'>
                      <span className='hotline-days-parent'>
                        Open Mon - Sat &nbsp;
                      </span>
                      <span className='hotline-link'>
                        <a href='#'>What's this number?</a>
                      </span>{' '}
                    </div>
                  </div>

                  <button
                    className={`border-0 t-parent-link ${
                      changeToogle ? 'changeToogle' : ''
                    } `}
                    onClick={menuExpand}
                  >
                    <div className='t-parent'>
                      <div className='t-lines t-top-left '></div>
                      <div className='t-lines t-top-right '></div>
                      <div className='t-lines t-midddle'></div>
                      <div className='t-lines  t-bottom-left'></div>
                      <div className='t-lines t-bottom-right'></div>
                    </div>
                  </button>
                </div>
              </header>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Header;
