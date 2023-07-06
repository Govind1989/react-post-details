import React from "react";
import images from "../constants/images";
import text from "../constants/text";

const BlogComment = () => {
  return (
    <>
      <div className="p_blog_comment_main w-full flex justify-between h-[34px] px-4 md:px-12 mt-[12px]">
        <div className="com_user_banner_info inline-flex w-[190px] h-[34px] items-start gap-[8px] justify-start">
          <img
            src={images.userAvatar}
            alt="user_avatar"
            className=" com_user_avatar w-38 h-68 flex-shrink-0 rounded-xl bg-cover bg-orange-100"
          />
          <div className="inline-flex">
            <div className="flex flex-col  ">
              <h1 className="com_user_banner_username text-[14px] text-[#1D232B] font-noto-sans font-bold leading-normal">
                {text.USER_NAME}
              </h1>
            </div>
            <div className="com_expert_icon inline-flex flex-shrink-0">
              <img
                src={images.ExpertIcon}
                alt="expert-icon"
                className="com_expert w-4 h-4  flex-shrink rounded-xl bg-orange-100 mx-1 my-1"
              />
              <span className="com_user_banner_user_text text-xs text-[#919EB6] font-noto-sans font-medium leading-normal my-1 tracking-tighter">
                {text.USER_TEXT}
              </span>
            </div>
          </div>
        </div>
        <div className="inline-flex items-center justify-end">
          <div className=" com_group_icon items-center">
            <img
              src={images.groupIcon}
              alt="group-icon"
              className="com_group w-[32px] h-[32px] "
            />
          </div>
        </div>
      </div>

      <div className="p_blog_comment w-[80.27vw]  ml-[58px] sm:ml-24">
        <div className="p_blog_comment_text flex  flex-col ">
          <p className="com_blog_comment text-[12px] text-[#313B49] font-noto-sans font-medium leading-normal tracking-tight  sm:whitespace-normal sm:overflow-ellipsis ">
            {text.BLOG_COMMENT}
          </p>
        </div>
        <div className="com_blog_actions flex w-full h-[40px] flex-shrink-0 bg-[#fff] items-center gap-[8px]">
          <div className="com_heart_action flex items-center">
            <img
              src={images.heartIcon}
              alt="heart-icon"
              className="com_heart w-[28px] h-[28px] "
            />
            <span className="text-[#919EB6]  text-[9.5px] font-roboto font-normal  leading-normal ">
              5
            </span>
          </div>
          <div className="com_comment_action flex items-center">
            <img
              src={images.commentIcon}
              alt="comment-icon"
              className="com_comment w-[25px] h-[25px] "
            />
            <span className="text-[#919EB6]  text-[9.5px] font-roboto font-normal leading-normal ">
              5
            </span>
          </div>
        </div>

        <div className="p_user_comments flex items-center mt-2">
          <div className="com_user_info inline-flex justify-start items-center gap-[7.5px]">
            <img
              src={images.userIIAvatar}
              alt="user_avatar"
              className="com_user_avatar w-34 h-87 flex-shrink-0 rounded-xl bg-cover bg-[#FBB0AE]"
            />
            <h1 className="com_username text-[15px] text-[#1D232B] font-noto-sans font-bold leading-normal">
              {text.USER_II_NAME}
            </h1>
            <span className="com_user_text text-xs text-[#919EB6] font-noto-sans font-medium leading-normal my-1 tracking-tighter">
              {text.USER_TEXT}
            </span>
          </div>
          <div className=" items-center justify-end">
            <div className="com_group_icon items-center">
              <img
                src={images.groupIcon}
                alt="group-icon"
                className="com_group w-[32px] h-[32px] "
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-shrink-0 ml-[40px]">
          <p className="com_blog_comment text-[12px] text-[#313B49]  font-noto-sans font-medium leading-normal tracking-tight  sm:whitespace-normal sm:overflow-ellipsis ">
            {text.USER_II_COMMENT}
          </p>
          <div className="com_heart_action flex items-center">
            <img
              src={images.heartIcon}
              alt="heart-icon"
              className="com_heart w-[28px] h-[28px]"
            />
            <span className="text-[#919EB6]  text-[9.5px] font-roboto font-normal  leading-normal ">
              5
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogComment;
