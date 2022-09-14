import React, { useEffect, useState } from "react";
import Link from "next/link";
import testImg from "../assets/test.png";
import Image from "next/image";
import { useMediumContext } from "../context/MediumContext";

const RecommendPosts = ({post}) => {
  const {posts, users} = useMediumContext()
  const [user, setUser] = useState()
  useEffect(() => {
    setUser(users.find(user => user.email === post?.email))
    console.log(user)
  }, [post?.email])
  return (
    <Link className="my-6" href={`/posts/${post?.id}`}>
      <div className="flex justify-between my-6 cursor-pointer">
        <div className="">
          <div className="flex items-center mb-3">
            {
              user&&<Image
              src={user?.imageUrl}
              width={30}
              height={30}
              className="rounded-full"
            />
            }
            <span className="pl-3">{user?.name}</span>
          </div>
          <p className="font-bold">{post?.title}</p>
        </div>
        {
          post.bannerImg&&<Image
          src={post?.bannerImg}
          width={80}
          height={80}
          className="rounded-xl mb-5"
        />
        }
      </div>
    </Link>
  );
};

export default RecommendPosts;
