import React from "react";
import MainLayout from "../components/Layouts/MainLayout";
import UserBanner from "../components/UserBanner";
import BlogPost from "../components/BlogPost";
import BlogComment from "../components/BlogComment";
import CommentInput from "../components/CommentInput";

const PostDetailsPage = () => {
  return (
    <MainLayout>
      <UserBanner />
      <BlogPost />
      <BlogComment />
      <CommentInput />
    </MainLayout>
  );
};

export default PostDetailsPage;
