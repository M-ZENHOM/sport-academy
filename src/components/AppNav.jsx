import { Link, NavLink, useLocation } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { useEffect, useState } from "react";
import { FaRegWindowClose } from "react-icons/fa";

const AppNav = () => {
  const [open, setOpen] = useState(false);
  const [isScroll, setScroll] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => {
    const ScrollHandle = () => {
      window.scrollY === 0 && setScroll(false);
      window.scrollY !== 0 && setScroll(true);
    };
    setOpen(false);
    window.addEventListener("scroll", ScrollHandle);
    return () => window.addEventListener("scroll", ScrollHandle);
  }, [pathname]);
  return (
    <header
      className={` ${
        isScroll ? "bg-white text-black" : "text-white"
      }  fixed top-0 left-0 right-0 z-10 w-full p-5 mx-auto`}
      style={{ direction: "rtl" }}
    >
      <div className="md:hidden flex w-5/6 justify-between items-center text-xl mx-auto">
        <Link className="text-2xl">اكاديمية الشباب</Link>
        <nav className="space-x-[20px]">
          <NavLink to="/" className="navLink mx-[20px] ">
            الرئيسية
          </NavLink>
          <NavLink to="/عن-النادي" className="navLink">
            عن النادي
          </NavLink>
          <NavLink to="/الانشطة-الرياضية" className="navLink">
            الانشطة الرياضية
          </NavLink>
          <NavLink to="/تواصل-معنا" className="navLink">
            تواصل معنا
          </NavLink>
        </nav>
      </div>

      {/* Mobile Nav */}
      <div className="hidden md:flex w-5/6 justify-between items-center text-xl mx-auto">
        <Link className="text-2xl">اكاديمية الشباب</Link>
        {!open ? (
          <AiOutlineMenu
            className="hidden md:block text-3xl cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        ) : (
          <FaRegWindowClose
            onClick={() => setOpen(!open)}
            className="text-3xl"
          />
        )}
        <nav
          className={`flex justify-evenly mpx-10 align-center flex-col fixed  ${
            open ? "top-[71px]" : "top-[-300px]"
          } left-0 h-[300px] bg-white md:rounded-b-2xl  text-pur-900 w-full px-10  transition-all duration-700`}
        >
          <NavLink to="/" className="navLink">
            الرئيسية
          </NavLink>
          <NavLink to="/عن-النادي" className="navLink">
            عن النادي
          </NavLink>
          <NavLink to="/الانشطة-الرياضية" className="navLink">
            الانشطة الرياضية
          </NavLink>
          <NavLink to="/تواصل-معنا" className="navLink">
            تواصل معنا
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default AppNav;
