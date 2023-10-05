import { Link, NavLink } from 'react-router-dom'
import cls from './styles.module.scss'
import { Burger, Logo, Mode } from '../../icons/svj'
import { clsx } from 'clsx'
import { GreenButton, LightButton } from '../Buttons'
import { useState } from 'react'

const elModeToggler = document.querySelector('.toggleModeBtn');
if(elModeToggler) {
  elModeToggler.addEventListener('click', function(){
document.body.classList.toggle('theam--dark');
console.log(elModeToggler);
  } );
}



export const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen)
  }



  return (
    <div class=" page__body  , page__body--theeam--dark ">
      <header className={clsx(cls.header, 'container')}>

        <div className={cls.headerContent}>
          <Link to="/"> <Logo /></Link>
          <div className={clsx(cls.rightContent, { [cls.open]: isNavOpen })} >
            <div className={cls.navbar}>
              <ul className={cls.navbarList}>
                <li className={cls.listItem}>

                  <NavLink className={({ isActive }) => clsx(cls.navLink, { [cls.active]: isActive })} to="/">  Product</NavLink>
                </li>
                <li className={cls.listItem}>

                  <NavLink className={({ isActive }) => clsx(cls.navLink, { [cls.active]: isActive })} to="/customers"> Customers</NavLink>
                </li>
                <li className={cls.listItem}>

                  <NavLink className={({ isActive }) => clsx(cls.navLink, { [cls.active]: isActive })} to="/pricing"> Pricing</NavLink>
                </li>
                <li className={cls.listItem}>

                  <NavLink className={({ isActive }) => clsx(cls.navLink, { [cls.active]: isActive })} to="/resources">Resources</NavLink>
                </li>
              </ul>
            </div>
            <div className={cls.authBtn}><LightButton>Sign In</LightButton></div>
            <div className={cls.authBtn}><GreenButton>Sign Up</GreenButton></div>
            <button className={cls.toggleModeBtn} ><Mode /></button>
          </div>
          <button className={cls.burgerBtn} onClick={toggleNav}>
            <Burger className={cls.burger} />
          </button>
        </div>
      </header >
    </div>
    )
}
