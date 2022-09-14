import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useMediumContext } from "../context/MediumContext";
const Post = ({ author, bannerImg, body, title, postOn, id, brief, email }) => {
  const { users } = useMediumContext();
  const [userImg, setUserImg] = useState();
  useEffect(() => {
    setUserImg(users.find((user) => user.id === email));
  }, [email]);
  return (
    <Link href={`/posts/${id}`}>
      <div className="border rounded-lg shadow-md">
        <div className="overflow-hidden group">
          {bannerImg && (
            <Image
              src={`${bannerImg}`}
              width="100%"
              height="60"
              layout="responsive"
              objectFit="cover"
              className="w-full h-60 object-cover hover:scale-105 transition-transform duration-200 ease-in-out"
            />
          )}
        </div>
        <div className="flex justify-between space-x-2 px-4 mt-4">
          <div className="py-4">
            <h3 className="font-bold text-lg">{title}</h3>
            <p className="text-sm max-w-sm text-gray-600">{brief}</p>
            <div className="text-">add by {userImg?.name}</div>
          </div>
          <div className="sm:w-[20%]">
            {userImg &&<Image
              className="rounded-full"
              src={`${userImg?.imageUrl}`}
              alt="userimg"
              width={100}
              height={100}
            />}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Post;
