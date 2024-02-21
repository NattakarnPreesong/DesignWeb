import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Navbar as MTNavbar, MobileNav, Typography, IconButton } from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logoImage from "/img/jps.png";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";

export function Navbar({ brandName, routes, action }) {
  const [openNav, setOpenNav] = React.useState(false);
  const [openDropdown, setOpenDropdown] = React.useState(null);
  const { t } = useTranslation("global");

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) {
        setOpenNav(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleDropdown = (index) => {
    setOpenDropdown((prevIndex) => (prevIndex === index ? null : index));
  };

  const closeDropdown = () => {
    setOpenDropdown(null);
  };

  const renderDropdown = (dropdownItems) => (
    <ul className="absolute top-auto left-auto bg-white py-2 rounded-lg shadow-lg text-black font-bold">
      {dropdownItems.map(({ name, path, href, target }) => (
        <Typography
          key={name}
          as="li"
          variant="small"
          color="inherit"
          className="px-4 py-2 capitalize font-bold"
          onClick={() => {
            closeDropdown();
            //window.location.href = path;
            href = path;
          }}
        >
          {href ? (
            <a href={href} target={target} className="block hover:text-blue-500">
              {t(name + ".message")}
            </a>
          ) : (
            <Link to={path} target={target} className="block hover:text-blue-500">
              {t(name + ".message")}
            </Link>
          )}
        </Typography>
      ))}
    </ul>
  );

  const renderNavItem = ({ name, path, icon, href, target, dropdown }, index) => (
    <Typography
      key={name}
      as="li"
      variant="small"
      color="inherit"
      className="capitalize"
      onClick={() => (dropdown ? toggleDropdown(index) : closeDropdown() )}
    >
      {href ? (
        <a href={href} target={target} className="flex items-center gap-1 p-1 font-bold">
          {icon && React.createElement(icon, { className: "w-[18px] h-[18px] opacity-75 mr-1" })}
          {t(name + ".message")}
        </a>
      ) : (
        <Link to={path} target={target} className="flex items-center gap-1 p-1 font-bold">
          {t(name + ".message")} 
          {icon && React.createElement(icon, { className: "w-[18px] h-[18px] font-bold" })}
        </Link>
      )}
      {dropdown && openDropdown === index && renderDropdown(dropdown)}
    </Typography>
  );

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 text-inherit lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {routes.filter((route) => !route.hidden).map(renderNavItem)}
    </ul>
  );

  return (
    <MTNavbar color="transparent" className="p-3">
      <div className="container mx-auto flex items-center justify-between text-white">
        <Link to="/">
          <div className="flex items-center">
            <img src={logoImage} alt="Logo" className="w-10 h-8 " />
            <Typography className="mr-4 ml-2 cursor-pointer py-1.5 font-bold">{(brandName)}</Typography>
          </div>
        </Link>
        <div className="hidden lg:block">{navList}</div>
        
        <LanguageSwitcher />

        <IconButton
          variant="text"
          size="sm"
          color="white"
          className="ml-auto text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? <XMarkIcon strokeWidth={2} className="h-6 w-6" /> : <Bars3Icon strokeWidth={2} className="h-6 w-6" />}
        </IconButton>
      </div>
      <MobileNav className="rounded-xl bg-white px-4 pt-2 pb-4 text-blue-gray-900 " open={openNav}>
        <div className="container mx-auto">{navList}</div>
      </MobileNav>
    </MTNavbar>
  );
}

Navbar.defaultProps = {
  brandName: "JAPAN SYSTEM (THAILAND) CO.LTD.",
};

Navbar.propTypes = {
  brandName: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
  action: PropTypes.node,
};

Navbar.displayName = "/src/widgets/layout/navbar.jsx";

export default Navbar;
