import React from "react";
import text from "../constants/text";
import images from "../constants/images";

const BlogPost = () => {
  return (
    <>
      <div className="p_blog_post flex-inline mt-4  ">
        <h1 className="p_blog_post_title text-[#1D232B] text-[14px] font-noto-sans font-bold leading-normal tracking-tight px-4 md:px-12">
          {text.BLOG_TITLE}
        </h1>
        <div className="p_blog_post_description flex w-full flex-col mt-4 px-4 md:px-12">
          <p className="com_description_text text-[12px] text-[#313B49] font-noto-sans font-medium leading-normal tracking-tight whitespace-pre-line break-words">
            {text.BLOG_DESCRIPTION}
          </p>
        </div>
        <div className="com_blog_post_tags flex flex-row flex-wrap mt-4 gap-2 px-4 md:px-12">
          <span className="com_blog_tags flex-inline px-3 -center justify-center rounded-full bg-[#F7F8FA] border-solid border-n-3 border-opacity-30 border-[0.5px] h-[28px]  ">
            <span className="text-[10px] text-[#5A6B87] font-sans font-medium leading-normal tracking-tighter">
              #2023
            </span>
          </span>
          <span className="com_blog_tags flex-inline px-3 -center justify-center rounded-full bg-[#F7F8FA] border-solid border-n-3 border-opacity-30 border-[0.5px] h-[28px]  ">
            <span className="text-[10px] text-[#5A6B87] font-sans font-medium leading-normal tracking-tighter">
              #TODAYISMONDAY
            </span>
          </span>
          <span className="com_blog_tags flex-inline px-3 -center justify-center rounded-full bg-[#F7F8FA] border-solid border-n-3 border-opacity-30 border-[0.5px] h-[28px]  ">
            <span className="text-[10px] text-[#5A6B87] font-sans font-medium leading-normal tracking-tighter">
              #TOP
            </span>
          </span>
          <span className="com_blog_tags flex-inline px-3 -center justify-center rounded-full bg-[#F7F8FA] border-solid border-n-3 border-opacity-30 border-[0.5px] h-[28px]  ">
            <span className="text-[10px] text-[#5A6B87] font-sans font-medium leading-normal tracking-tighter">
              #POPS!
            </span>
          </span>
          <span className="com_blog_tags flex-inline px-3 -center justify-center rounded-full bg-[#F7F8FA] border-solid border-n-3 border-opacity-30 border-[0.5px] h-[28px]  ">
            <span className="text-[10px] text-[#5A6B87] font-sans font-medium leading-normal tracking-tighter">
              #WOW
            </span>
          </span>
          <span className="com_blog_tags flex-inline px-3 -center justify-center rounded-full bg-[#F7F8FA] border-solid border-n-3 border-opacity-30 border-[0.5px] h-[28px]  ">
            <span className="text-[10px] text-[#5A6B87] font-sans font-medium leading-normal tracking-tighter">
              #ROW
            </span>
          </span>
        </div>
        <div className="p_blog_post_image w-full h-[450px] flex-shrink-0 bg-[#EDEEF3] mt-4">
          <img
            src="https://wjddnjs754.cafe24.com/web/product/small/202303/5b9279582db2a92beb8db29fa1512ee9.jpg"
            alt="blog_image"
            className="p_blog_image w-full h-[450px]"
          />
        </div>

        <div className="com_blog_actions px-4 md:px-12 flex w-full h-[56px] flex-shrink-0 bg-[#fff] items-center gap-[8px]">
          <div className="com_heart_action flex items-center">
            <img
              src={images.heartIcon}
              alt="heart-icon"
              className="com_heart w-[32px] h-[32px] "
            />
            <span className="text-[#919EB6]  text-[12px] font-roboto font-normal  leading-normal ">
              5
            </span>
          </div>
          <div className="com_comment_action flex items-center">
            <img
              src={images.commentIcon}
              alt="comment-icon"
              className="com_comment w-[32px] h-[32px] "
            />
            <span className="text-[#919EB6]  text-[12px] font-roboto font-normal  leading-normal ">
              5
            </span>
          </div>
          <div className="com_bookmark_action items-center">
            <img
              src={images.bookmarkIcon}
              alt="bookmark-icon"
              className="com_bookmark w-[32px] h-[32px] "
            />
          </div>
          <div className="com_group_icon items-center">
            <img
              src={images.groupIcon}
              alt="group-icon"
              className="com_group w-[32px] h-[32px] "
            />
          </div>
        </div>
      </div>
      <div className="com_post_divider w-full h-[2px] flex-shrink-0 bg-[#F7F8FA]"></div>
    </>
  );
};

export default BlogPost;
