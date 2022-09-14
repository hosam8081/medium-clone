import React from "react";
import Image from "next/image";
import testImg from "../assets/test.png";
import { FaTwitter, FaFacebook, FaLinkedinIn, FaCopy } from "react-icons/fa";
import ReactMarkdown from 'react-markdown'

const ArticleMain = ({ post, author }) => {
  return (
    <div className="flex-[3] border-l border-r px-6">
      <div className="flex">
        <div>
          {author?.imageUrl&&<Image
            src={`${author?.imageUrl}`}
            width={40}
            height={40}
            alt={"test"}
            className="rounded-full"
          />}
        </div>
        <div className="flex-1 ml-2">
          <h3 className="capitalize">{author?.name}</h3>
          <p className="text-gray-400">wed, apr 2022</p>
        </div>
        <div className="flex space-x-6 text-xl text-gray-600">
          <FaTwitter />
          <FaLinkedinIn />
          <FaFacebook />
          <FaCopy />
        </div>
      </div>
      {/* // Article here       */}
      <div>
        <div>
          <div className="w-full mt-4">
            {post?.bannerImg&&
              <Image
              src={`${post?.bannerImg}`}
              alt="test"
              width={100}
              height={50}
              layout="responsive"
              objectFit="cover"
              className="w-full h-60"
            />
            }
          </div>
          <h1 className="text-3xl font-bold mt-2">{post?.title}</h1>
          <div className="flex flex-col mt-2">
            <h4 className="text-gray-500">
              {author?.name} {""}
              {new Date(post?.postOn).toLocaleString("en-US", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </h4>
            <h4>{post?.brief}</h4>
          </div>
          <ReactMarkdown>
            {post?.body}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default ArticleMain;
