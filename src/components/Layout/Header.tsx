import React, { useState } from "react";
import style from "./header.module.scss";
import Logo from "../../assets/images/icons/LOGO.svg";
import Whatsapp from "../../assets/images/icons/whatsapp.svg";
import Telegram from "../../assets/images/icons/telegram.svg";
import ScrollLink from "./helper/ScrollLink";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
      <header className={style.header}>
        <a href="/" className={style.logo}>
          <img src={Logo} alt="Logo"/>
          <span className={style.logoText}>STANDART LUX</span>
        </a>
        <div className={`${style.burger} ${isMenuOpen ? style.open : ""}`} onClick={toggleMenu}>
          <div className={style.burgerLine}></div>
          <div className={style.burgerLine}></div>
          <div className={style.burgerLine}></div>
        </div>
        <nav className={`${style.link} ${isMenuOpen ? style.active : ""}`}>
          <div className={style.linkbox}></div>
          <a href="/">Главная</a>
          <ScrollLink target="#About">О нас</ScrollLink>
          <ScrollLink target="#FAQ">FAQ</ScrollLink>
          <ScrollLink target="#Contacts">Контакты</ScrollLink>
          <ScrollLink target="#Application" style={{
            background: 'transparent',
            padding: '5px 10px',
            fontSize: '17px',
            borderRadius: '5px',
            border: '2px solid gray'
          }}>
            заказать звонок
          </ScrollLink>

          <div className={style.contact}>
            <a href="tel:+996 (552) 44-66-44" target="_black">+996 (<span className='span'>552</span>) 44-66-44</a>
            <div className={style.socialMedia}>
              <a href="https://wa.me/996552446644" target="_black"><img src={Whatsapp} alt=""/></a>
              <a href="https://t.me/+996552446644" target="_black"><img src={Telegram} alt=""/></a>
            </div>
          </div>
        </nav>
      </header>
  );
};

export default Header;