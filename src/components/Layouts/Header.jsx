import React from "react";
import images from "../../constants/images";
import text from "../../constants/text.js";
const Header = () => {
  return (
    <section>
      <header>
        <div className="com_header flex w-full  px-4 md:px-12 py-4  justify-between bg-[#FFFFFF]">
          <img
            src={images.arrow}
            alt="arrow-img"
            className="com_header__arrow w-6 h-6 sm:w-8 sm:h-8 hover:shadow-md cursor-pointer"
          />
          <h1 className="com_header__title text-md sm:text-xl text-[#1D232B] font-bold">
            {text.PAGE_TITLE}
          </h1>
          <img
            src={images.notification}
            alt="notification-img"
            className="com_header__notification w-6 h-6 sm:w-8 sm:h-8 hover:shadow-md cursor-pointer"
          />
        </div>
      </header>
    </section>
  );
};

export default Header;
