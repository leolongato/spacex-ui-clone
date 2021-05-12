import Image from "next/image";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlinePlus, AiOutlineSearch } from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import { useEffect, useRef, useState } from "react";

const categories = ["Mens", "Womens", "Kids", "Accessories", "Premium"];

const Header: React.FC = () => {
  const menuRef = useRef<HTMLUListElement>();
  const searchRef = useRef<HTMLUListElement>();

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isSearchOpen, setSearchOpen] = useState<boolean>(false);

  useEffect(() => {
    if (isMenuOpen) {
      menuRef.current.classList.add("translate-menu");
      document.documentElement.classList.add("overflow");
    } else {
      menuRef.current.classList.remove("translate-menu");
      document.documentElement.classList.remove("overflow");
    }
  }, [isMenuOpen]);

  useEffect(() => {
    if (isSearchOpen) {
      searchRef.current.classList.add("search-div-open");
    } else {
      searchRef.current.classList.remove("search-div-open");
    }
  }, [isSearchOpen]);

  return (
    <>
      <div className="AnnouncementBar">
        <p>
          Due to constraints from our carriers because of current events,
          shipments may be delayed.
        </p>
      </div>
      <header className="header">
        <section className="search-div" ref={searchRef}>
          <div className="search-input">
            <AiOutlineSearch color="black" size={24} />
            <input
              placeholder="Search..."
              type="text"
              name=""
              id=""
              className="search"
            />
          </div>
          <IoMdClose
            color="black"
            className="icon-close-search"
            size={28}
            onClick={() => setSearchOpen(!isSearchOpen)}
          />
        </section>
        <GiHamburgerMenu
          size={28}
          className="hamburguer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
        <img
          src="/spacex-logo.svg"
          alt="Picture of the author"
          className="logo"
        />
        <ul className="menu-items-right">
          <li className="account menu-item-right">
            <a className="menu-item-right-title exception">Account</a>
          </li>
          <li className="menu-item-right">
            <a
              className="menu-item-right-title exception"
              onClick={() => setSearchOpen(!isSearchOpen)}
            >
              Search
            </a>
            <AiOutlineSearch
              className="menu-item-right-icon"
              size={28}
              onClick={() => setSearchOpen(!isSearchOpen)}
            />
          </li>
          <li className="menu-item-right">
            <a className="menu-item-right-title">Cart&nbsp;(0)</a>
            <BiShoppingBag className="menu-item-right-icon" size={28} />
          </li>
        </ul>
        <ul className="menu-items-center" ref={menuRef}>
          <IoMdClose
            size={28}
            className="iconClose"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
          {categories.map((element: string, index: number) => (
            <li className="menu-item" key={index}>
              <a>{element}</a>
              <AiOutlinePlus className="iconPlus" />
            </li>
          ))}
          <li className="accountBtn">
            <a>Account</a>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;
