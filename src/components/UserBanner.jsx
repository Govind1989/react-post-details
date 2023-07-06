import React from "react";
import images from "../constants/images";
import text from "../constants/text";

const UserBanner = () => {
  return (
    <div className="p_user_banner flex justify-between px-4 md:px-12">
      <div className="com_user_info inline-flex items-center gap-[8px] justify-start">
        <img
          src={images.userAvatar}
          alt="user_avatar"
          className="com_user_avatar w-38 h-68  flex-shrink-0 rounded-xl bg-cover bg-orange-100"
        />
        <div className=" inline-flex">
          <div className=" flex flex-col">
            <h1 className="com_username text-[12px] text-[#1D232B] font-bold leading-normal">
              {text.USER_NAME}
            </h1>
            <div className="inline-flex">
              <span className="p_user_height text-[10px] font-roboto font-normal leading-normal text-[#919EB6]">
                {text.HEIGHT}
              </span>
              <span className="w-[2px] h-[2px] bg-[#919EB6] rounded-sm inline-flex mt-2 mx-1 items-center"></span>
              <span className="p_user_weight text-[10px] font-roboto font-normal leading-normal text-[#919EB6]">
                {text.WEIGHT}
              </span>
            </div>
          </div>
          <div className="inline-flex">
            <img
              src={images.ExpertIcon}
              alt="expert-icon"
              className="com_expert_icon w-[12px] h-[12px] flex-shrink rounded-xl bg-orange-100 mx-1 my-1"
            />
            <h1 className="com_user_text text-[10px] text-[#919EB6] font-sans font-medium leading-normal my-1 tracking-tighter">
              {text.USER_TEXT}
            </h1>
          </div>
        </div>
      </div>
      <div className="inline mt-2 justify-end">
        <button className="p_user_follow_button flex flex-col justify-center px-3  rounded-full items-center bg-[#01B99F] ">
          <h1 className="text-[10px] text-[#fff] font-sans font-medium leading-normal my-1 tracking-tighter">
            {text.BUTTON_LABEL}
          </h1>
        </button>
      </div>
    </div>
  );
};

export default UserBanner;
