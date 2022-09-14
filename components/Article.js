import React from "react";
import Link from "next/link";
import Post from "./Post";
import { useMediumContext } from "../context/MediumContext";
const Article = () => {
  const {posts} = useMediumContext()
  return (
    <div className="px-4 py-20">
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 cursor-pointer">
          {posts?.map((post, index) => {
            return(
              <Post key={index} {...post}/>
            )
          }) }
        </div>
      </div>
    </div>
  );
};

export default Article;
