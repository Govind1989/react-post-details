import React from "react";
import images from "../constants/images";
import text from "../constants/text";

const CommentInput = () => {
  return (
    <div className="P_comment_input flex w-full items-center justify-between py-[8px] px-[10px] mt-[12px] border-t border-solid border-[1px] border-[#F7F8FA]">
      <div className="p_comment_input_fields flex items-center flex-shrink-0 gap-[16px] justify-start">
        <img
          src={images.imagesMode}
          alt="heart-icon"
          className="p_image_upload w-[24px] h-[24px] "
        />
        <div className="p_comment_text flex flex-col justify-center ">
          <p className="P_comment_text_input text-[12px] text-[#AFB9CA] font-noto-sans font-normal leading-normal tracking-tight ">
            {text.COMMENT_FORM_PLACEHOLDER}
          </p>
        </div>
      </div>
      <div className="p_comment_submit flex justify-end mr-3">
        <button className="p_comment_submit_button text-[12px] text-[#919EB6] font-noto-sans font-normal leading-normal tracking-tight">
          {text.COMMENT_SUBMIT_LABEL}
        </button>
      </div>
    </div>
  );
};

export default CommentInput;
