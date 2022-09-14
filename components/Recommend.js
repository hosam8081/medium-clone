import React from "react";
import Image from "next/image";
import { BiMessageDots } from "react-icons/bi";
import { useMediumContext } from "../context/MediumContext";
import RecommendPosts from "./RecommendPosts";

const Recommend = ({ author }) => {
  const { posts } = useMediumContext();
  return (
    <div className="hidden sm:block relative no-scrollbar w-[25%] h-full">
      <div className="fixed overflow-y-scroll no-scrollbar h-full">
        <div className="h-full w-full px-6">
          <div className="">
            <button className="bg-black px-4 py-2 rounded-full text-white">
              Get started
            </button>
          </div>
          <div className="">
            <input
              type="text"
              className="border rounded-lg px-4 mt-5 w-full py-3"
              placeholder="search"
            />
          </div>

          <div className="py-6">
            <div className="w-20 h-20 rounded-full overflow-hidden">
              {author?.imageUrl && (
                <Image
                  src={author?.imageUrl}
                  width={100}
                  height={100}
                  className=""
                  alt="test"
                />
              )}
            </div>
            <h3 className="capitalize mt-2 mb-2 text-3xl font-semibold">
              {author?.name}
            </h3>
            <p className="max-w-sm text-gray-500 mb-4">{author?.about}</p>
            <div className="flex space-x-4">
              <button className="text-white bg-green-600 hover:bg-green-700 px-4 py-2 rounded-full">
                Follow
              </button>
              <button className="text-lg text-white bg-green-600 hover:bg-green-700 px-4 py-2 rounded-full">
                <BiMessageDots />
              </button>
            </div>
            <h3 className="mb-3 my-5">More From Medium</h3>
            {posts&&posts.map((post) => {
              return (
                <RecommendPosts post={post} key={post.id}/>
              );
            })}
            {/* <div className="my-5">
              <h3 className="mb-3">More From Medium</h3>
              <div className="flex justify-between">
                <div className="">
                  <div className="flex items-center mb-3">
                    <Image
                      src={testImg}
                      width={30}
                      height={30}
                      className="rounded-full"
                    />
                    <span className="pl-3">hosam salah</span>
                  </div>
                  <p className="font-bold">
                    5 New Killer Features of Next.js 12
                  </p>
                </div>
                <Image
                  src={testImg}
                  width={80}
                  height={80}
                  className="rounded-xl mb-5"
                />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommend;
